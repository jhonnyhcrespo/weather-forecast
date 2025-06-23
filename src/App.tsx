import './App.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import ForecastPage from './features/forecastPage/ForecastPage';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ForecastPage />
    </QueryClientProvider>
  );
}

export default App
