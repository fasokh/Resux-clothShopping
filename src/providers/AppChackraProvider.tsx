import theme from "@/theme";
import { ChakraProvider } from "@chakra-ui/react";
import { FC, PropsWithChildren } from "react";

type Props = PropsWithChildren;

const AppChackraProvider: FC<Props> = ({ children }) => {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
};

export default AppChackraProvider;
