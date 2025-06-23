import { renderWithChakra } from "../../../test/utils";
import DetailedWeatherBanner from "./DetailedWeatherBanner";
import { screen } from "@testing-library/react";

describe("DetailedWeatherBanner", () => {
  const mockProps = {
    period: {
      number: 1,
      name: "Today",
      startTime: "2025-06-23T11:00:00-04:00",
      endTime: "2025-06-23T18:00:00-04:00",
      isDaytime: true,
      temperature: 88,
      temperatureUnit: "F",
      temperatureTrend: "",
      probabilityOfPrecipitation: {
        unitCode: "wmoUnit:percent",
        value: 30,
      },
      windSpeed: "14 mph",
      windDirection: "E",
      icon: "https://api.weather.gov/icons/land/day/tsra_hi,20/tsra_hi,30?size=medium",
      shortForecast: "Chance Showers And Thunderstorms",
      detailedForecast:
        "A chance of showers and thunderstorms. Sunny, with a high near 88. East wind around 14 mph, with gusts as high as 22 mph. Chance of precipitation is 30%. New rainfall amounts between a tenth and quarter of an inch possible.",
    },
    selectPeriod: () => {},
    address: "1320 S Dixie Hwy, Coral Gables, FL 33146",
    isLoading: false
  };

  test("display the period name", () => {
    renderWithChakra(<DetailedWeatherBanner {...mockProps} />);
    expect(
      screen.getByTestId("detailed-weather-banner-period-name")
    ).toHaveTextContent("Today");
  });

  test("display the address", () => {
    renderWithChakra(<DetailedWeatherBanner {...mockProps} />);
    expect(
      screen.getByTestId("detailed-weather-banner-address")
    ).toHaveTextContent("1320 S Dixie Hwy, Coral Gables, FL 33146");
  });

  test("display the temperature", () => {
    renderWithChakra(<DetailedWeatherBanner {...mockProps} />);
    expect(
      screen.getByTestId("detailed-weather-banner-temperature")
    ).toHaveTextContent("88 F");
  });

  test("display the wind", () => {
    renderWithChakra(<DetailedWeatherBanner {...mockProps} />);
    expect(
      screen.getByTestId("detailed-weather-banner-wind")
    ).toHaveTextContent("E 14 mph");
  });

  test("display the detailed forecast", () => {
    renderWithChakra(<DetailedWeatherBanner {...mockProps} />);
    expect(
      screen.getByTestId("detailed-weather-banner-period-detailed-forecast")
    ).toHaveTextContent(
      "A chance of showers and thunderstorms. Sunny, with a high near 88. East wind around 14 mph, with gusts as high as 22 mph. Chance of precipitation is 30%. New rainfall amounts between a tenth and quarter of an inch possible."
    );
  });
});
