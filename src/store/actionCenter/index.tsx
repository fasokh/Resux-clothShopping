import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const FetchProductItem = createAsyncThunk("fetchData", async () => {
  const fetch = await axios.get("https://fakestoreapi.com/products");
  const { data } = fetch;
  return data;
});

export default FetchProductItem;
