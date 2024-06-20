import { Container, VStack, Heading, Text, Box, Image, Button } from "@chakra-ui/react";
import { FaPlane, FaHotel, FaCar } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.xl" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center" p={4}>
      <VStack spacing={8} width="100%">
        <Heading as="h1" size="2xl" textAlign="center" mb={4}>
          Welcome to Travel Booking
        </Heading>
        <Text fontSize="xl" textAlign="center" mb={8}>
          Book flights, hotels, and car rentals all in one place.
        </Text>
        <Box width="100%" display="flex" justifyContent="space-around" mb={8}>
          <Box textAlign="center">
            <FaPlane size="3em" />
            <Text mt={2}>Flights</Text>
          </Box>
          <Box textAlign="center">
            <FaHotel size="3em" />
            <Text mt={2}>Hotels</Text>
          </Box>
          <Box textAlign="center">
            <FaCar size="3em" />
            <Text mt={2}>Car Rentals</Text>
          </Box>
        </Box>
        <Image src="/images/travel.jpg" alt="Travel" borderRadius="md" mb={8} />
        <Button colorScheme="teal" size="lg">
          Start Booking
        </Button>
      </VStack>
    </Container>
  );
};

export default Index;