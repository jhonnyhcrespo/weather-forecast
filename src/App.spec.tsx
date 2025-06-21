import { screen } from "@testing-library/react";
import App from "./App";
import { renderWithChakra } from "./test/utils";

describe("App", () => {
  test("displays weather app heading", () => {
    renderWithChakra(<App />);
    expect(screen.getByText("Weather Forecast")).toBeInTheDocument();
  });
});
