import { describe, it, expect, beforeEach, vi } from "vitest";
import type { Coordinate } from "../../../src/types";
import { weatherService } from "./weatherService"
import { mockForecast, mockForecastApiResponse } from "./mockForecastAPIResponse.ts";
import { mockPointApiResponse } from "./mockPointApiResponse.ts";

globalThis.fetch = vi.fn();

describe("WeatherService", () => {
  const mockFetch = globalThis.fetch as ReturnType<typeof vi.fn>;

  beforeEach(() => {
    mockFetch.mockClear();
  });

  describe("getPointMetadata", () => {

    it("should return coordinates for a valid address", async () => {
      mockFetch.mockResolvedValueOnce({
        ok: true,
        status: 200,
        json: async () => mockPointApiResponse,
      });

      const coordinates: Coordinate = {
        latitude: 38.846016223866,
        longitude: -76.927487242301,
      };

      const result = await weatherService.getPointMetadata(coordinates);

      expect(fetch).toHaveBeenCalledWith(
        "https://api.weather.gov/points/38.846016223866,-76.927487242301"
      );

      expect(result).toEqual({
        forecast: "https://api.weather.gov/gridpoints/LWX/101,70/forecast",
      });
    });

    it("should handle 404 response (location out of scope)", async () => {
      mockFetch.mockResolvedValueOnce({
        ok: false,
        status: 404,
      });
      
      const coordinates = {
        latitude: -17.3601735,
        longitude: -66.177221
      }

      await expect(
        weatherService.getPointMetadata(coordinates)
      ).rejects.toThrow("The location is out of scope");
    });

    it("should handle malformed JSON response", async () => {
      mockFetch.mockResolvedValueOnce({
        ok: true,
        status: 200,
        json: vi.fn().mockRejectedValueOnce(new Error("Invalid JSON")),
      });

      await expect(
        weatherService.getPointMetadata({
          latitude: 40.7128,
          longitude: -74.006,
        })
      ).rejects.toThrow("Invalid JSON");
    });

    
  });

  describe("getForecast", () => {
  
    it("should fetch forecast data successfully", async () => {
      const forecastUrl =
        "https://api.weather.gov/gridpoints/NYC/32,34/forecast";

      mockFetch.mockResolvedValueOnce({
        ok: true,
        status: 200,
        json: vi.fn().mockResolvedValueOnce(mockForecastApiResponse),
      });

      const result = await weatherService.getForecast(forecastUrl);

      expect(fetch).toHaveBeenCalledWith(forecastUrl);

      expect(result).toEqual(mockForecast);
    });
  })
});
