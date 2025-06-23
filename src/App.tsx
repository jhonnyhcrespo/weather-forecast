import './App.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import ForecastPage from './features/forecastPage/ForecastPage';
import { AddressProvider } from './context/AddressContext';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AddressProvider>
        <ForecastPage />
      </AddressProvider>
    </QueryClientProvider>
  );
}

export default App
