import {
  Box,
  Button,
  Divider,
  Flex,
  Grid,
  Icon,
  Stack,
  Text,
} from "@chakra-ui/react";
import { CustomCard } from "../../../chakra/CustomCard";
import { BsCurrencyRupee } from "react-icons/bs";
import { FaBtc } from "react-icons/fa";
import { Fragment } from "react";

const Transactions = () => {
  const transactions = [
    {
      id: "1",
      icon: BsCurrencyRupee,
      text: "INR Deposit",
      amount: "+ ₹81,123.10",
      timestamp: "2022-06-09 7:06 PM",
    },
    {
      id: "2",
      icon: FaBtc,
      text: "BTC  Sell",
      amount: "- 12.48513391 BTC",
      timestamp: "2022-06-09 7:06 PM",
    },
    {
      id: "3",
      icon: BsCurrencyRupee,
      text: "INR Deposit",
      amount: "+ ₹81,123.10",
      timestamp: "2022-06-09 7:06 PM",
    },
  ];

  return (
    <CustomCard h="full" bgColor="#2D2D2D" color="#FFFFFF"> {/* Grey-black background color and white text color */}
      <Text mb="6" fontSize="sm" color="#FFFFFF"> {/* White text color */}
        Recent Transactions
      </Text>
      <Stack spacing={4}>
        {transactions.map((transaction, i) => (
          <Fragment key={transaction.id}>
            {i !== 0 && <Divider borderColor="#383838" />} {/* Darker grey color for divider */}
            <Flex gap="4">
              <Grid
                placeItems="center"
                bg="#383838"
                boxSize={10}
                borderRadius="full"
              >
                <Icon as={transaction.icon} color="#FFFFFF" /> {/* White icon color */}
              </Grid>
              <Flex justify="space-between" w="full">
                <Stack spacing={0}>
                  <Text textStyle="h6" color="#FFFFFF"> {/* White text color */}
                    {transaction.text}
                  </Text>
                  <Text fontSize="sm" color="#A5A5A5"> {/* Lighter grey color for timestamp */}
                    {transaction.timestamp}
                  </Text>
                </Stack>
                <Text textStyle="h6" color="#FFFFFF"> {/* White text color */}
                  {transaction.amount}
                </Text>
              </Flex>
            </Flex>
          </Fragment>
        ))}
      </Stack>
      <Button w="full" mt="6" colorScheme="green"> {/* Green button color */}
        View All
      </Button>
    </CustomCard>
  );
};

export default Transactions;
