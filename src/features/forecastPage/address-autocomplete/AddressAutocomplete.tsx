import Autocomplete from "react-google-autocomplete";
import { useAddressContext } from '../../../context/AddressContext';

const AddressAutocomplete = () => {

  const { fetchForecast } = useAddressContext();
 
  return (
    <Autocomplete
      apiKey={import.meta.env.VITE_GOOGLE_PLACES_API_KEY}
      options={{
        types: ["address"],
        componentRestrictions: { country: "us" },
        fields: ["formatted_address"],
      }}
      style={{ width: "450px", padding: "0.25rem 1rem" }}
      onPlaceSelected={(address) => fetchForecast(address.formatted_address)}
    />
  );
}

export default AddressAutocomplete