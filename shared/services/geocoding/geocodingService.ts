import type { Coordinate } from "../../../src/types";

class GeocodingService {
  private readonly baseUrl =
    "https://geocoding.geo.census.gov/geocoder/locations/onelineaddress";

  async getCoordinates(address: string): Promise<Coordinate> {

    if (!address) {
      throw new Error("Address cannot be empty");
    }

    const url = `${this.baseUrl}?address=${encodeURIComponent(
      address
    )}&benchmark=4&format=json`;

    try {
      const response = await fetch(url)

      if (!response.ok) {
        throw new Error(
          `Error: ${response.status} - ${response.statusText}`
        );
      }

      const data = await response.json();

      if (data.result.addressMatches.length === 0) {
        throw new Error("Address not found");
      }

      const coordinates = data.result.addressMatches[0].coordinates;

      return {
        latitude: coordinates.y,
        longitude: coordinates.x,
      };
    } catch (error) {
      console.error("[GeocodingService] Error fetching geocoding data:", error);
      throw error;
    }
  }
}

export const geocodingService = new GeocodingService();
