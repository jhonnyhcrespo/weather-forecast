import { useQuery } from "@tanstack/react-query";
import React, { type FC, createContext, useContext, useEffect, useState } from "react";
import { forecastService } from "../services/forecast/forecastService";
import type { Period } from "../types";

interface AddressContextType {
  address: string | null;
  periods: Array<Period>;
  isLoading: boolean;
  fetchForecast: (address: string) => void;
  selectedPeriod?: Period | null;
  selectPeriod: (period: Period) => void;
  error: Error | null;
}

interface AddressProviderProps {
  children: React.ReactElement;
}

// eslint-disable-next-line react-refresh/only-export-components
export const AddressContext = createContext<AddressContextType | null>(null);

export const AddressProvider: FC<AddressProviderProps> = ({ children }) => {
  const [address, setAddress] = useState<string | null>(null)
  const [selectedPeriod, setSelectedPeriod] = useState<Period | null>(null)

  const { data: forecast, isLoading, error } = useQuery({
    queryKey: ["forecast", address],
    queryFn: async () => {
      if (address) {
          return await forecastService.getForecast(address);
      }
      return null
    },
    enabled: !!address, // only query when address has a value
  });

  const fetchForecast = (address: string) => {
    setAddress(address)
  }

  const selectPeriod = (period: Period) => {
    setSelectedPeriod(period);
  }

  const shared = {
    address,
    periods: forecast?.periods || [],
    isLoading,
    error,
    fetchForecast,
    selectedPeriod,
    selectPeriod,
  };

  useEffect(() => {
    if (forecast) {
      setSelectedPeriod(forecast.periods[0]);
    } else {
      setSelectedPeriod(null)
    }
  }, [forecast])

  return (
    <AddressContext.Provider value={shared}>{children}</AddressContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export const useAddressContext = () => {
  const context = useContext(AddressContext)
  if (!context)
    throw new Error("useAddressContext must be used within a AddressProvider");
  
  return context
}
