import HomeLayout from "@/layout/Homelayout";
import { Box } from "@chakra-ui/react";
import { NextPage } from "next";
import Products from "./Products";

const Home: NextPage = () => {
  return (
    <Box>
      <HomeLayout>
        <Products />
      </HomeLayout>
    </Box>
  );
};

export default Home;
