import { Box, Container } from '@chakra-ui/react'
import AddressAutocomplete from '../../features/forecastPage/address-autocomplete/AddressAutocomplete'

const Navbar = () => {
  return (
    <Box height="16" backgroundColor="blue.800">
      <Container maxW="5xl" paddingX={6} paddingY={4}>
        <AddressAutocomplete />
      </Container>
    </Box>
  );
}

export default Navbar