import {
  Box,
  Button,
  Card,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Icon,
  Input,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/react";
import React from "react";
import { IoMdMail } from "react-icons/io";

const SupportCard = ({ leftComponent, icon, title, text }) => {
  return (
    <Flex
      gap={6}
      justify="space-between"
      flexDir={{
        base: "column",
        xl: "row",
      }}
      bg="#2D2D2D" // Grey-black background color
      p="6"
      borderRadius="xl"
      color="#FFFFFF" // White text color
    >
      <Stack maxW="24rem">
        <Icon as={icon} boxSize={6} color="#27AE60" /> {/* Green icon color */}
        <Text fontWeight="medium" as="h1" textStyle="h1">
          {title}
        </Text>
        <Text fontSize="sm" color="#A5A5A5"> {/* Lighter grey color for text */}
          {text}
        </Text>
      </Stack>
      <Box maxW="550px" w="full">
        {leftComponent}
      </Box>
    </Flex>
  );
};

export default SupportCard;
