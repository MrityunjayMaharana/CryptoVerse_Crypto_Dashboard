import {
  Button,
  Flex,
  HStack,
  Icon,
  Image,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import { CustomCard } from "../../../chakra/CustomCard";
import { BsArrowUpRight } from "react-icons/bs";
import { AiFillPlusCircle, AiOutlineMinusCircle } from "react-icons/ai";

const PriceSection = () => {
  const timestamps = ["7:15 PM", "7:55 PM", "8:55 PM", "9:55 PM", "10:55 PM"];

  return (
    <CustomCard bgColor="#2D2D2D" color="#FFFFFF"> {/* Grey-black background color and white text color */}
      <Flex justify="space-between" align="start">
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
              <HStack fontWeight="medium" color="green.500">
                <Icon as={BsArrowUpRight} />
                <Text fontSize="sm" fontWeight="medium" color="#FFFFFF"> {/* White text color */}
                  22%
                </Text>
              </HStack>{" "}
            </HStack>
          </HStack>
        </Stack>
        <HStack>
          <Button leftIcon={<Icon as={AiFillPlusCircle} />} bg="#27AE60" color="#FFFFFF"> {/* Green button with white text */}
            Buy
          </Button>
          <Button leftIcon={<Icon as={AiOutlineMinusCircle} />} bg="#27AE60" color="#FFFFFF"> {/* Green button with white text */}
            Sell
          </Button>
        </HStack>
      </Flex>
      <Tabs variant="soft-rounded">
        <Flex justify="end">
          <TabList bg="#2D2D2D" p="3px"> {/* Grey-black background color */}
            {["1H", "1D", "1W", "1M"].map((tab) => (
              <Tab
                _selected={{ bg: "#27AE60" }}
                key={tab}
                fontSize="sm"
                p="6px"
                borderRadius="4"
                color="#FFFFFF"
              >
                {tab}
              </Tab>
            ))}
          </TabList>
        </Flex>
        <TabPanels>
          <TabPanel>
            <Image w="100%" src="/graph.svg" mt="3rem" />
            <HStack justify="space-between">
              {timestamps.map((timestamp) => (
                <Text key={timestamp} fontSize="sm" color="#FFFFFF"> {/* White text color */}
                  {timestamp}
                </Text>
              ))}
            </HStack>
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </CustomCard>
  );
};

export default PriceSection;
