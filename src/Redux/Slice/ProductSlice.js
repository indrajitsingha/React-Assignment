import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const ProductSlice = createSlice({
  name: "productSlice",
  initialState: {
    products: [],
    uniqueCategory: [],
    Barnds: [],
    Related: [],
    filterData: [],
  },
  reducers: {
    SearchData: (state, action) => {
      state.filterData = state.products.filter((item) =>
        item.title.toLowerCase().includes(action.payload.toLowerCase())
      );
    },
    getUniqueCategory: (state) => {
      let Category = [];

      state.products.map((x) => {
        if (Category.filter((data) => data == x.category).length == 0) {
          Category.push(x.category);
        }
      });
      state.uniqueCategory = Category;
    },
    GetBrands: (state, action) => {
      if (state.products) {
        console.log(action.payload);
        state.Barnds = state.products.filter(
          (x) => x.category == action.payload
        );
      }
    },
    GetRelatedProducts: (state, action) => {
      console.log(action.payload);
      if (state.products) {
        state.Related = state.products.filter(
          (x) => x.category == action.payload
        );
      }
    },
    GetFilterbyCateandBrands: (state, action) => {
      const { category, brand } = action.payload;
      state.filterData = state.products.filter(
        (x) => x.category == category && x.brand == brand
      );
    },
    ResetSearch: (state) => {
      state.filterData = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.products = action.payload;
      // console.log(action.payload);
    });
  },
});

export const getProducts = createAsyncThunk("getproduct/data", async () => {
  const response = await axios.get("https://dummyjson.com/products");
  const res = response.data;

  return res.products;
});

export const {
  SearchData,
  ResetSearch,
  GetFilterbyCateandBrands,
  getUniqueCategory,
  GetBrands,
  GetRelatedProducts,
} = ProductSlice.actions;
export default ProductSlice.reducer;
