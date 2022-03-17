import { Box } from "@chakra-ui/react";

import { globals } from "src/constants";

type Props = {
  children: React.ReactNode;
};

const ContainerMaxWidth = ({ children, ...rest }: Props) => {
  return (
    <Box maxW={globals.maxWidth} mx="auto" {...rest}>
      {children}
    </Box>
  );
};

export default ContainerMaxWidth;
