import DetailedWeatherBanner from "./detailed-weather-banner/DetailedWeatherBanner";
import ForecastGrid from "./ForecastGrid";
import { Container } from "@chakra-ui/react";
import Navbar from "../../components/layout/Navbar";
import { useAddressContext } from "../../context/AddressContext";
import AddressNotFound from "./address-not-found/AddressNotFound";

const ForecastPage = () => {
  const { selectedPeriod, selectPeriod, address, isLoading, periods, error } =
    useAddressContext();
  return (
    <div>
      <Navbar />
      <Container maxW="5xl" padding={"24px"}>
        {address && error && (
          <AddressNotFound />
        )}
        <>
          <DetailedWeatherBanner
            period={selectedPeriod}
            address={address}
            isLoading={isLoading}
          />
          <ForecastGrid periods={periods} selectPeriod={selectPeriod} />
        </>
      </Container>
    </div>
  );
};

export default ForecastPage;
