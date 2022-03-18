// Docs : https://chakra-ui.com/docs/theming/customize-theme#customizing-global-styles

import { mode } from "@chakra-ui/theme-tools";

const global = (props: any) => ({
  body: {
    fontSize: "18px",
    fontFamily: "body",
    // mode(lightMode, darkMode)(props) function is the same as
    // props.colorMode === "dark" ? darkMode : lightMode
    bg: mode("gray.200", "gray.900")(props),
  },
});

export default global;
