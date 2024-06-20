import { Container, VStack, Heading, Text, Box, Button } from "@chakra-ui/react";
import { Link, useLocation } from "react-router-dom";

const BookingConfirmation = () => {
  const location = useLocation();
  const { bookingDetails } = location.state || {};

  if (!bookingDetails) {
    return (
      <Container centerContent maxW="container.md" p={4}>
        <VStack spacing={4} width="100%">
          <Heading as="h1" size="xl" textAlign="center" mb={4}>
            No Booking Details Found
          </Heading>
          <Button as={Link} to="/" colorScheme="teal" size="lg">
            Go to Home
          </Button>
        </VStack>
      </Container>
    );
  }

  return (
    <Container centerContent maxW="container.md" p={4}>
      <VStack spacing={4} width="100%">
        <Heading as="h1" size="xl" textAlign="center" mb={4}>
          Booking Confirmation
        </Heading>
        <Box p={4} borderWidth="1px" borderRadius="md" width="100%">
          <Text fontSize="lg" mb={2}><strong>Airline:</strong> {bookingDetails.airline}</Text>
          <Text fontSize="lg" mb={2}><strong>Price:</strong> {bookingDetails.price}</Text>
          <Text fontSize="lg" mb={2}><strong>Duration:</strong> {bookingDetails.duration}</Text>
          <Text fontSize="lg" mb={2}><strong>Departure:</strong> {bookingDetails.departure}</Text>
          <Text fontSize="lg" mb={2}><strong>Arrival:</strong> {bookingDetails.arrival}</Text>
          <Text fontSize="lg" mb={2}><strong>Departure Date:</strong> {bookingDetails.departureDate}</Text>
          <Text fontSize="lg" mb={2}><strong>Return Date:</strong> {bookingDetails.returnDate}</Text>
          <Text fontSize="lg" mb={2}><strong>Passengers:</strong> {bookingDetails.passengers}</Text>
        </Box>
        <Button as={Link} to="/" colorScheme="teal" size="lg">
          Go to Home
        </Button>
      </VStack>
    </Container>
  );
};

export default BookingConfirmation;