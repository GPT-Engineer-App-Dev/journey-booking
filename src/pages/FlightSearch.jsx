import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, VStack, Heading, FormControl, FormLabel, Input, Button, Select, Box, Text } from "@chakra-ui/react";

const FlightSearch = () => {
  const [departure, setDeparture] = useState("");
  const [arrival, setArrival] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [passengers, setPassengers] = useState(1);
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();

  const handleSearch = () => {
    // Mock search results
    const results = [
      { id: 1, airline: "Airline A", price: "$200", duration: "3h 20m", departure, arrival, departureDate, returnDate, passengers },
      { id: 2, airline: "Airline B", price: "$250", duration: "4h 10m", departure, arrival, departureDate, returnDate, passengers },
    ];
    setSearchResults(results);
  };

  const handleBook = (bookingDetails) => {
    navigate("/booking-confirmation", { state: { bookingDetails } });
  };

  return (
    <Container centerContent maxW="container.md" p={4}>
      <VStack spacing={4} width="100%">
        <Heading as="h1" size="xl" textAlign="center" mb={4}>
          Search Flights
        </Heading>
        <FormControl id="departure">
          <FormLabel>Departure</FormLabel>
          <Input type="text" value={departure} onChange={(e) => setDeparture(e.target.value)} />
        </FormControl>
        <FormControl id="arrival">
          <FormLabel>Arrival</FormLabel>
          <Input type="text" value={arrival} onChange={(e) => setArrival(e.target.value)} />
        </FormControl>
        <FormControl id="departure-date">
          <FormLabel>Departure Date</FormLabel>
          <Input type="date" value={departureDate} onChange={(e) => setDepartureDate(e.target.value)} />
        </FormControl>
        <FormControl id="return-date">
          <FormLabel>Return Date</FormLabel>
          <Input type="date" value={returnDate} onChange={(e) => setReturnDate(e.target.value)} />
        </FormControl>
        <FormControl id="passengers">
          <FormLabel>Passengers</FormLabel>
          <Select value={passengers} onChange={(e) => setPassengers(e.target.value)}>
            {[...Array(10).keys()].map((num) => (
              <option key={num + 1} value={num + 1}>
                {num + 1}
              </option>
            ))}
          </Select>
        </FormControl>
        <Button colorScheme="teal" size="lg" onClick={handleSearch}>
          Search
        </Button>
        {searchResults.length > 0 && (
          <Box width="100%" mt={8}>
            <Heading as="h2" size="lg" mb={4}>
              Search Results
            </Heading>
            {searchResults.map((result) => (
              <Box key={result.id} p={4} borderWidth="1px" borderRadius="md" mb={4}>
                <Text>Airline: {result.airline}</Text>
                <Text>Price: {result.price}</Text>
                <Text>Duration: {result.duration}</Text>
                <Button colorScheme="teal" size="sm" mt={2} onClick={() => handleBook(result)}>
                  Book
                </Button>
              </Box>
            ))}
          </Box>
        )}
      </VStack>
    </Container>
  );
};

export default FlightSearch;