export interface Coordinate {
  latitude: number;
  longitude: number;
}

export interface PointMetadata {
  forecast: string;
}

export interface Forecast {
  generatedAt: string;
  updateTime: string;
  periods: Array<Period>
}

export interface Period {
  number: number;
  name: string;
  startTime: string;
  endTime: string;
  isDaytime: boolean;
  temperature: number;
  temperatureUnit: string;
  temperatureTrend: string;
  probabilityOfPrecipitation: {
    unitCode: string;
    value: number;
  };
  windSpeed: string;
  windDirection: string;
  icon: string;
  shortForecast: string;
  detailedForecast: string;
}
