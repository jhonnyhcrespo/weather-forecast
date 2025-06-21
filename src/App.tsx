import { Container, Heading } from '@chakra-ui/react'
import './App.css'
import { Provider } from './components/ui/provider'

function App() {
  return (
    <Provider defaultTheme="light">
      <Container>
        <Heading>Weather Forecast</Heading>
      </Container>
    </Provider>
  );
}

export default App
