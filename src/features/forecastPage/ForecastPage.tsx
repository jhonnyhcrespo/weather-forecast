import { useQuery } from '@tanstack/react-query';
import { useState } from 'react'
import { forecastService } from '../../services/forecast/forecastService';
import DetailedWeatherBanner from "./detailed-weather-banner/DetailedWeatherBanner";
import ForecastGrid from './ForecastGrid';
import { Container } from '@chakra-ui/react';
import Navbar from '../../components/layout/Navbar';

const ForecastPage = () => {

  const address = "1320 S Dixie Hwy, Coral Gables, FL 33146";
  const [selectedPeriodNumber, setSelectedPeriodNumber] = useState(1)

  const { data, isLoading } = useQuery({
    queryKey: ["forecast"],
    queryFn: async () => await forecastService.getForecast(address),
  });

  const periods = data?.periods || []

  const selectedPeriod = data?.periods.find(
    (period) => period.number === selectedPeriodNumber
  );

  const selectPeriod = (periodNumber: number) => {
    setSelectedPeriodNumber(periodNumber);
  }

  return (
    <div>
      <Navbar />
      <Container maxW="5xl" padding={"24px"}>
        <DetailedWeatherBanner
          period={selectedPeriod}
          address={address}
          isLoading={isLoading}
        />
        <ForecastGrid periods={periods} selectPeriod={selectPeriod} />
      </Container>
    </div>
  );
}

export default ForecastPage