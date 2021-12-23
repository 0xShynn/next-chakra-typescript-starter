import React, { ReactElement } from "react";

import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Box, Button, useColorMode } from "@chakra-ui/react";

export default function ThemeToggler(): ReactElement {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box>
      <Button onClick={toggleColorMode}>
        {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
      </Button>
    </Box>
  );
}
