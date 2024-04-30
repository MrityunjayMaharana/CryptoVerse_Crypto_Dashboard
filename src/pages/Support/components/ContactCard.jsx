import {
  Card,
  Checkbox,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Box,
  Stack,
  Text,
  Textarea,
  Button,
} from "@chakra-ui/react";
import React from "react";
import { useState } from "react";

const ContactCard = () => {
  const [name, setName] = useState("");
  const [surename, setSurename] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [agreeTerms, setAgreeTerms] = useState(false);

  const setForm = () => {
    alert("Submitted Successfully!");
    setName("");
    setSurename("");
    setEmail("");
    setMessage("");
    setAgreeTerms(false);
  };
  const sendMsg = () => {
    alert("Message sent Successfully!");
    setName("");
    setSurename("");
    setEmail("");
    setMessage("");
    setAgreeTerms(false);
  };
  return (
    <Card p="6" borderRadius="1rem">
      <Stack spacing={6}>
        <Text fontWeight="medium" fontSize="sm">
          You will receive response within 24 hours of time of submit.
        </Text>

        <HStack
          flexDir={{
            base: "column",
            md: "row",
          }}
        >
          <FormControl>
            <FormLabel>Name</FormLabel>
            <Input placeholder="Enter Your Name.." value={name} onChange={(e) => setName(e.target.value)} />
          </FormControl>
          <FormControl>
            <FormLabel>Surename</FormLabel>
            <Input placeholder="Enter Your Surename.." value={surename} onChange={(e) => setSurename(e.target.value)} />
          </FormControl>
        </HStack>
        <FormControl>
          <FormLabel>Email</FormLabel>
          <Input type="email" placeholder="Enter Your Email.." value={email} onChange={(e) => setEmail(e.target.value)} />
        </FormControl>
        <FormControl>
          <FormLabel>Messagee</FormLabel>
          <Textarea placeholder="Enter Your Message.." value={message} onChange={(e) => setMessage(e.target.value)}/>
        </FormControl>
        <Checkbox defaultChecked value={agreeTerms} onChange={(e) => setAgreeTerms(e.target.value)}>
          <Text fontSize="xs">
            I agree with
            <Box as="span" color="p.purple">
              {" "}
              Terms & Conditions.
            </Box>
          </Text>
        </Checkbox>
        <Stack>
          <Button fontSize="sm" onClick={sendMsg}>Send a Message</Button>
          <Button fontSize="sm" colorScheme="gray" onClick={setForm}>
            Book a Meeting
          </Button>
        </Stack>
      </Stack>
    </Card>
  );
};

export default ContactCard;
