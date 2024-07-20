import { Box, List, ListItem } from "@chakra-ui/react";
import React, { FC, useEffect, useState } from "react";
import ProductItem from "../ProductItem";
import { STATUS } from "@/store/product";
import { useDispatch, useSelector } from "react-redux";
import { Text } from "@chakra-ui/react";
import { RootState, RootDispatch } from "@/store/app";
import FetchProductItem from "@/store/actionCenter";

const Products: FC = () => {
  //   const [data, setDate] = useState<string[] | number[]>([]);
  const { item: product, status } = useSelector(
    (state: RootState) => state.product
  );
  const dispatch: RootDispatch = useDispatch();

  //   useEffect(() => {}, []);

  useEffect(() => {
    dispatch(FetchProductItem());
  }, [dispatch]);

  if (status === STATUS.ERROR) {
    return <Text>"...Error"</Text>;
  }
  if (status === STATUS.LOADING) {
    return <Text>"...Loading"</Text>;
  }

  return (
    <Box
      display="flex"
      justifyContent="space-around"
      alignItems="center"
      flexWrap="wrap"
    >
      {product.map((item) => (
        <List key={item.id}>
          <ProductItem
            id={item.id}
            title={item.title}
            image={item.image}
            price={item.price}
            rate={item.rate}
          />
        </List>
      ))}
    </Box>
  );
};

export default Products;
