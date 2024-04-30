import { Button, HStack, Icon, Stack, Tag, Text } from "@chakra-ui/react";
import React from "react";
import {
  AiOutlineInfoCircle,
  AiOutlineArrowDown,
  AiOutlineArrowUp,
} from "react-icons/ai";

const PortfolioSection = () => {
  return (
    <HStack
      justify="space-between"
      bg="#2D2D2D" // Grey-black background color
      borderRadius="xl"
      p="6"
      align={{
        base: "flex-start",
        xl: "center",
      }}
      flexDir={{
        base: "column",
        xl: "row",
      }}
      spacing={{
        base: 4,
        xl: 0,
      }}
    >
      <HStack
        spacing={{
          base: 0,
          xl: 16,
        }}
        align={{
          base: "flex-start",
          xl: "center",
        }}
        flexDir={{
          base: "column",
          xl: "row",
        }}
      >
        <Stack>
          <HStack color="#FFFFFF"> {/* White text color */}
            <Text fontSize="sm">Total Portfolio Value</Text>
            <Icon as={AiOutlineInfoCircle} />
          </HStack>
          <Text textStyle="h2" fontWeight="medium" color="#FFFFFF"> {/* White text color */}
            ₹ 112,312.24
          </Text>
        </Stack>

        <Stack>
          <HStack color="#FFFFFF"> {/* White text color */}
            <Text fontSize="sm">Wallet Balances</Text>
          </HStack>
          <HStack
            spacing={2}
            align={{
              base: "flex-start",
              sm: "center",
            }}
            flexDir={{
              base: "column",
              sm: "row",
            }}
          >
            <HStack>
              <Text textStyle="h2" fontWeight="medium" color="#FFFFFF"> {/* White text color */}
                22.39401000
              </Text>{" "}
              <Tag colorScheme="gray" fontWeight="medium">
                BTC
              </Tag>
            </HStack>
            <HStack>
              <Text textStyle="h2" fontWeight="medium" color="#FFFFFF"> {/* White text color */}
                ₹ 1,300.00
              </Text>{" "}
              <Tag colorScheme="gray">INR</Tag>
            </HStack>
          </HStack>
        </Stack>
      </HStack>

      <HStack>
        <Button leftIcon={<Icon as={AiOutlineArrowDown} />} bg="#27AE60" color="#FFFFFF"> {/* Green button with white text */}
          Deposit
        </Button>
        <Button leftIcon={<Icon as={AiOutlineArrowUp} />} bg="#27AE60" color="#FFFFFF"> {/* Green button with white text */}
          Withdraw
        </Button>
      </HStack>
    </HStack>
  );
};

export default PortfolioSection;
