import { renderWithChakra } from "../../../test/utils";
import ForecastMiniCard from "./ForecastMiniCard";
import { screen } from "@testing-library/react";

describe("ForecastMiniCard", () => {
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
  };

  test("display the period name", () => {
    renderWithChakra(<ForecastMiniCard {...mockProps} />);
    expect(
      screen.getByTestId("forecast-mini-card-period-name")
    ).toHaveTextContent("Today")
  });
  
  test("display the period temperature", () => {
    renderWithChakra(<ForecastMiniCard {...mockProps} />);
    expect(
      screen.getByTestId("forecast-mini-card-period-temperature")
    ).toHaveTextContent("88 F");
  });
});
