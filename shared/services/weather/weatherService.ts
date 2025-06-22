import type { Coordinate, Forecast, PointMetadata } from "../../../src/types";

class WeatherService {
  private readonly baseUrl = "https://api.weather.gov";

  async getPointMetadata(coordinate: Coordinate): Promise<PointMetadata> {

    const url = `${this.baseUrl}/points/${coordinate.latitude},${coordinate.longitude}`;

    try {
      const response = await fetch(url);

      if (!response.ok) {
        if (response.status === 404) {
          throw new Error("The location is out of scope");
        }
        throw new Error(`Error: ${response.status} - ${response.statusText}`);
      }

      const data = await response.json();

      return {
        forecast: data.properties.forecast,
      };
    } catch (error) {
      console.error("[WeatherService] Error fetching point metadata: ", error);
      throw error;
    }
  }

  async getForecast(forecastUrl): Promise<Forecast> {
    try {
      const response = await fetch(forecastUrl);

      if (!response.ok) {
        throw new Error(`Error: ${response.status} - ${response.statusText}`);
      }

      const data = await response.json();

      const forecast: Forecast = {
        generatedAt: data.properties.generatedAt,
        updateTime: data.properties.updateTime,
        periods: data.properties.periods
      };

      return forecast;
    } catch (error) {
      console.error("[WeatherService] Error fetching forecast:", error);
      throw error;
    }
  }
}

export const weatherService = new WeatherService();
