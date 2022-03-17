import { Box } from "@chakra-ui/react";

import { PROJECT_CONST } from "src/utils/constants";

type Props = {
  children: React.ReactNode;
  rest?: any;
};

const ContainerMaxWidth = ({ children, ...rest }: Props) => {
  return (
    <Box maxW={PROJECT_CONST.maxWidth} mx="auto" {...rest}>
      {children}
    </Box>
  );
};

export default ContainerMaxWidth;
