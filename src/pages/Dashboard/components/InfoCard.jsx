import { Tag, Text } from "@chakra-ui/react";
import { CustomCard } from "../../../chakra/CustomCard";

const InfoCard = ({ imgUrl, text, tagText, inverted }) => {
  return (
    <CustomCard
      bgColor={inverted ? "#2D2D2D" : "white"} // Grey-black background color or white
      bgImage={imgUrl}
      bgSize="cover"
      bgRepeat="no-repeat"
    >
      <Tag
        color={inverted ? "#27AE60" : "white"} // Green text color or white
        bg={inverted ? "white" : "#27AE60"} // White background color or green
        borderRadius="full"
      >
        {tagText}
      </Tag>
      <Text
        mt="4"
        fontWeight="medium"
        textStyle="h5"
        color={inverted ? "white" : "black.80"} // White or dark text color
      >
        {text}
      </Text>
    </CustomCard>
  );
};

export default InfoCard;
