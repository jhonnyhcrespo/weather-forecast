
import { render } from "@testing-library/react";
import { Provider } from "../components/ui/provider";

export const renderWithChakra = (component: React.ReactElement) => {
  return render(<Provider defaultTheme="light">{component}</Provider>);
};
