// Complete the Index page component for a hair styling service website
import { Box, Container, Heading, Text, Button, Image, Stack, Flex, VStack, HStack, Icon } from "@chakra-ui/react";
import { FaCut, FaPhone, FaInstagram, FaFacebookSquare } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl">
      <Box textAlign="center" py={10}>
        <Heading as="h1" size="2xl" mb={2}>
          Phuket Hair Styling Services
        </Heading>
        <Text fontSize="xl" color="gray.600">
          Expert in Dreadlocks, Braids, and Hair Extensions
        </Text>
      </Box>

      <Flex direction={{ base: "column", md: "row" }} align="center" justify="space-around" my={10}>
        <VStack spacing={4}>
          <Image borderRadius="full" boxSize="250px" src="https://images.unsplash.com/photo-1496526713442-c6b403055df3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxkcmVhZGxvY2tzJTIwYXJ0aXN0fGVufDB8fHx8MTcxMzc5NzQ1NHww&ixlib=rb-4.0.3&q=80&w=1080" alt="Dreadlocks Service" />
          <Heading as="h3" size="lg">
            Dreadlocks
          </Heading>
          <Text>Get the best dreadlocks with our experienced stylists.</Text>
        </VStack>
        <VStack spacing={4}>
          <Image borderRadius="full" boxSize="250px" src="https://images.unsplash.com/photo-1500517484800-e4676bd66290?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxicmFpZGluZyUyMGhhaXIlMjBzdHlsaXN0fGVufDB8fHx8MTcxMzc5NzQ1NXww&ixlib=rb-4.0.3&q=80&w=1080" alt="Braiding Service" />
          <Heading as="h3" size="lg">
            Braids
          </Heading>
          <Text>Beautiful and intricate braids tailored for you.</Text>
        </VStack>
        <VStack spacing={4}>
          <Image borderRadius="full" boxSize="250px" src="https://images.unsplash.com/photo-1472747624745-ce92d32d3c24?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxoYWlyJTIwZXh0ZW5zaW9ucyUyMHN0eWxpc3R8ZW58MHx8fHwxNzEzNzk3NDU1fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Hair Extensions Service" />
          <Heading as="h3" size="lg">
            Hair Extensions
          </Heading>
          <Text>Add length and volume with high-quality extensions.</Text>
        </VStack>
      </Flex>

      <Box textAlign="center" my={10}>
        <Heading as="h2" size="xl" mb={4}>
          Book Your Appointment Today!
        </Heading>
        <Button colorScheme="teal" size="lg" leftIcon={<Icon as={FaCut} />}>
          Schedule Now
        </Button>
      </Box>

      <Box bg="gray.100" p={10}>
        <Heading as="h2" size="lg" textAlign="center" mb={5}>
          Follow Us
        </Heading>
        <HStack justify="center" spacing={10}>
          <Icon as={FaInstagram} w={8} h={8} />
          <Icon as={FaFacebookSquare} w={8} h={8} />
          <Icon as={FaPhone} w={8} h={8} />
        </HStack>
      </Box>
    </Container>
  );
};

export default Index;
