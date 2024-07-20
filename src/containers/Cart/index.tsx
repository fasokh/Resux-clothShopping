import HomeLayout from "@/layout/Homelayout";
import { Box } from "@chakra-ui/react";
import { NextPage } from "next";
import OrderSummary from "./OrderSummary";
import ShoppingCart from "./ShoppingCart";

const Cart: NextPage = () => {
  return (
    <HomeLayout>
      <Box
        display="flex"
        justifyContent="space-between"
        flexDirection={{ base: "column", md: "row" }}
        p="2rem"
      >
        <Box flex="1" mr={{ md: "1rem" }} mb={{ base: "2rem", md: "0" }}>
          <ShoppingCart />
        </Box>
        <Box flex="0 1 500px">
          <OrderSummary />
        </Box>
      </Box>
    </HomeLayout>
  );
};

export default Cart;
