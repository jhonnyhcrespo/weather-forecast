import { describe, it, expect, beforeEach, vi } from "vitest";
import type { Coordinate } from "../../../src/types";
import { geocodingService } from "./geocodingService";
import { mockGeocodingApiResponse } from "./mockGeocodingApiResponse";

globalThis.fetch = vi.fn();

describe("GeocodingService", () => {
  const mockFetch = globalThis.fetch as ReturnType<typeof vi.fn>;

  beforeEach(() => {
    mockFetch.mockClear();
  });

  describe("getCoordinates", () => {
    it("should return coordinates for a valid address", async () => {

      const address = "4600 Silver Hill Rd, Washington, DC 20233";

      mockFetch.mockResolvedValueOnce({
        ok: true,
        json: async () => mockGeocodingApiResponse,
      } as Response);

      const result: Coordinate = await geocodingService.getCoordinates(
        address
      );

      expect(result).toEqual({
        latitude: 25.712975193696,
        longitude: -80.278718083917,
      });
    });

    it("should throw error when address is not found", async () => {
      const address = "Invalid Address 12345";
      const mockResponse = {
        result: {
          addressMatches: [],
        },
      };

      mockFetch.mockResolvedValueOnce({
        ok: true,
        json: async () => mockResponse,
      } as Response);

      await expect(geocodingService.getCoordinates(address)).rejects.toThrow(
        "Address not found"
      );
    });

    it("should throw error when API request fails", async () => {
      const address = "Invalid Address 12345";

      mockFetch.mockResolvedValueOnce({
        ok: false,
        status: 500,
        statusText: 'Internal Server Error'
      } as Response);

      await expect(geocodingService.getCoordinates(address)).rejects.toThrow(
        "Error: 500 - Internal Server Error"
      );
    });

    it("should throw error for an empty address without calling API", async () => {
      const address = "";

      await expect(geocodingService.getCoordinates(address)).rejects.toThrow(
        "Address cannot be empty"
      );

      expect(mockFetch).not.toHaveBeenCalled();
    });
  });
});
