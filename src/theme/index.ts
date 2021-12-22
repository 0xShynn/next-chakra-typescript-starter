// Docs : https://chakra-ui.com/docs/theming/customize-theme#scaling-out-your-project
import { extendTheme } from "@chakra-ui/react";

import breakpoints from "./breakpoints";
import colors from "./colors";
import Button from "./components/button";
import Heading from "./components/heading";
import Link from "./components/link";
import Text from "./components/text";
import fonts from "./fonts";
import global from "./global";
import textStyles from "./textStyles";

// Extend the theme with custom colors, fonts, etc.
const overrides = {
  styles: {
    global,
  },
  breakpoints,
  colors,
  fonts,
  textStyles,
  // ...add new settings here
  components: {
    Button,
    Heading,
    Link,
    Text,
    // ...add new custom components here
  },
};

export default extendTheme(overrides);
