import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { type FC } from "react";
import type { Period } from "../../../types";

interface ForecastMiniCardProps {
  period: Period;
  selectPeriod: (periodNumber: number) => void;
}

const ForecastMiniCard: FC<ForecastMiniCardProps> = ({ period, selectPeriod }) => {
  return (
    <Box
      onClick={() => selectPeriod(period.number)}
      role="button"
      cursor="pointer"
      backgroundColor={"#FAFBFC"}
      padding={4}
      boxShadow={"0 2px 8px rgba(0, 0, 0, 0.08);"}
      borderBottom={"3px solid transparent"}
      _hover={{
        borderBottom: "3px solid #1a3478",
      }}
    >
      <Flex key={period.number} gapX={5}>
        <Box>
          <Image src={period.icon} height="86px" width="86px" />
        </Box>
        <Box>
          <Box>
            <Heading
              textStyle="md"
              data-testid="forecast-mini-card-period-name"
            >
              {period.name}
            </Heading>
          </Box>
          <Box>
            <Text textStyle="2xl" data-testid="forecast-mini-card-period-temperature">
              {period.temperature} {period.temperatureUnit}
            </Text>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default ForecastMiniCard;
