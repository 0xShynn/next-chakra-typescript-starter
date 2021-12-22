import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";

import overrides from "../theme/index";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={overrides}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
