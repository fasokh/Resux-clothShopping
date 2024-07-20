import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import FetchProductItem from "../actionCenter";

type Product = {
  id: number;
  price: number;
  title: string;
  rate: number;
  image: string;
};

// type StateStatus = {
//   LOADING: string;
//   ERROR: string;
//   IDLE: string;
// };

export const STATUS = {
  IDLE: "idle",
  ERROR: "error",
  LOADING: "loading",
};

type ProductState = {
  item: Product[];
  status: string;
};

const productInitialState: ProductState = {
  item: [],
  status: STATUS.IDLE,
};

// export const fetchProductItem = createAsyncThunk("fetchData", async () => {
//   const fetch = await axios.get("https://fakestoreapi.com/products");
//   const { data } = fetch;
//   return data;
// });

const productReducer = createSlice({
  name: "product",
  initialState: productInitialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(FetchProductItem.pending, (state) => {
        state.status = STATUS.LOADING;
      })
      .addCase(FetchProductItem.fulfilled, (state, action) => {
        state.item = action.payload;
        state.status = STATUS.IDLE;
      })
      .addCase(FetchProductItem.rejected, (state) => {
        state.status = STATUS.ERROR;
      });
  },
});

export const productAction = productReducer.actions;

export default productReducer;
