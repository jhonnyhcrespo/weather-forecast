
import { Box, Stack, Text, Flex, Skeleton, SkeletonText } from '@chakra-ui/react'
import type { Period } from '../../../types';
import type { FC } from 'react';

interface  DetailedWeatherCardProps {
  address?: string | null;
  period?: Period | null;
  isLoading: boolean;
}

const DetailedWeatherBanner: FC<DetailedWeatherCardProps> = ({ address, period, isLoading }) => {

  if (address == null || (!isLoading && period == null))
    return null

  return (
    <Stack
      backgroundColor="#FAFBFC"
      minHeight={96}
      boxShadow={"0 2px 8px rgba(38, 23, 23, 0.08);"}
      marginBottom={6}
      padding={4}
      borderRadius={"6px 6px 6px 6px"}
    >
      {isLoading ? (
        <>
          <SkeletonText noOfLines={4} />
          <Skeleton height={"250px"}></Skeleton>
        </>
      ) : (
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
          <Flex gapX={4}>
            <Box>
              <Text
                textStyle="6xl"
                whiteSpace="nowrap"
                data-testid="detailed-weather-banner-temperature"
              >
                {period?.temperature} {period?.temperatureUnit}
              </Text>
            </Box>
          </Flex>
          <Box marginTop="auto">
            <Text textStyle="1xl" data-testid="detailed-weather-banner-wind">
              Wind: {period?.windDirection} {period?.windSpeed}
            </Text>
            <Text data-testid="detailed-weather-banner-period-detailed-forecast">
              {period?.detailedForecast}
            </Text>
          </Box>
        </>
      )}
    </Stack>
  );
};

export default DetailedWeatherBanner;