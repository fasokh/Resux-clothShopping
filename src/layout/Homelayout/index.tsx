import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Box } from "@chakra-ui/react";
import React, { FC, PropsWithChildren } from "react";

type Props = PropsWithChildren;

const HomeLayout: FC<Props> = ({ children }) => {


  return (
    <Box>
      <Header />
      {children}
      <Footer />
    </Box>
  );
};

export default HomeLayout;
