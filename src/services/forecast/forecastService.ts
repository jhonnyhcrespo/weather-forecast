import type { Forecast } from "../../../src/types";

class ForecastService {
  private readonly baseUrl: string;

  constructor() {
    this.baseUrl = import.meta.env.VITE_FORECAST_API_URL;
    if (!this.baseUrl) {
      throw new Error(
        "VITE_FORECAST_API_URL is not defined in environment variables"
      );
    }
  }

  async getForecast(address: string): Promise<Forecast> {
    if (!address) {
      throw new Error("Address cannot be empty");
    }

    const url = `${this.baseUrl}?address=${encodeURIComponent(address)}`;

    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error("[ForecastService] Error fetching forecast: ", error);
      throw error;
    }
  }
}

export const forecastService = new ForecastService();
