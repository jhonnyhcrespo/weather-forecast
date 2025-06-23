import { SimpleGrid } from '@chakra-ui/react';
import { type FC } from 'react'
import type { Period } from '../../types';
import ForecastMiniCard from './forecast-mini-card/ForecastMiniCard';

interface ForecastGridProps {
  periods: Array<Period>;
  selectPeriod: (periodNumber: number) => void;
}

const ForecastGrid: FC<ForecastGridProps> = ({ periods, selectPeriod }) => {
  return (
    <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} gapY={4} gapX={4}>
      {periods.map((period) => (
        <ForecastMiniCard
          period={period}
          selectPeriod={selectPeriod}
        />
      ))}
    </SimpleGrid>
  );
}

export default ForecastGrid
