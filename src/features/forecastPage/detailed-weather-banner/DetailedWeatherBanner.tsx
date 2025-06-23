
import { Skeleton, SkeletonText, Stack, Text } from '@chakra-ui/react'
import type { Period } from '../../../types';
import type { FC } from 'react';

interface  DetailedWeatherCardProps {
  address: string;
  period?: Period;
  isLoading: boolean;
}

const DetailedWeatherBanner: FC<DetailedWeatherCardProps> = ({ address, period, isLoading }) => {
  return (
    <Stack
      backgroundColor="#FAFBFC"
      minHeight={96}
      boxShadow={"0 2px 8px rgba(38, 23, 23, 0.08);"}
      marginBottom={6}
      padding={4}
      borderRadius={"6px 6px 6px 6px"}
    >
      {isLoading && (
        <>
          <SkeletonText noOfLines={3} />
          <Skeleton height="250px" />
        </>
      )}
      {!isLoading && (
        <>
          <Text
            textStyle="xl"
            data-testid="detailed-weather-banner-period-name"
          >
            {period?.name}
          </Text>
          <Text textStyle="xl" data-testid="detailed-weather-banner-address">
            {address}
          </Text>
          <Text
            textStyle="6xl"
            whiteSpace="nowrap"
            data-testid="detailed-weather-banner-temperature"
          >
            {period?.temperature} {period?.temperatureUnit}
          </Text>
          <Text textStyle="1xl" data-testid="detailed-weather-banner-wind">
            {period?.windDirection} {period?.windSpeed}
          </Text>
          <Text
            marginTop="auto"
            data-testid="detailed-weather-banner-period-detailed-forecast"
          >
            {period?.detailedForecast}
          </Text>
        </>
      )}
    </Stack>
  );
};

export default DetailedWeatherBanner;