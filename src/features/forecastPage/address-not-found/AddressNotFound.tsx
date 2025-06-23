import { Container } from '@chakra-ui/react'

const AddressNotFound = () => {
  return (
    <Container
      boxShadow={"0 2px 8px rgba(38, 23, 23, 0.08);"}
      backgroundColor="#FAFBFC"
      padding={4}
      borderRadius={"6px 6px 6px 6px"}
    >
      Forecast not found for the provided address
    </Container>
  )
}

export default AddressNotFound