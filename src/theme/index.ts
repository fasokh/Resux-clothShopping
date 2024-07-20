import { extendTheme, type ThemeConfig } from "@chakra-ui/react";

const config = {
  initailColorMode: "dark",
  useSystemColorMode: false,
};

const theme = extendTheme({ config });

export default theme;
