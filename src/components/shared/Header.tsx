import { ComponentType } from "react";

import { Box, Flex, Text, useColorModeValue } from "@chakra-ui/react";

import ThemeToggler from "../ThemeToggler";

const Header: ComponentType = () => {
  const bg = useColorModeValue("gray.200", "black");

  return (
    <Box bg={bg} p="5">
      <Flex
        justify="space-between"
        align={"center"}
        direction={{ base: "column", sm: "row" }}
      >
        <Text fontWeight={"bold"}>Next Chakra Starter TS</Text>
        <ThemeToggler />
      </Flex>
    </Box>
  );
};

export default Header;
