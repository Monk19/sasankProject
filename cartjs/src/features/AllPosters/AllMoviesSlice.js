import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  allmovies: [
    {
      name: "Indiana Jones",
      totalCopies: 123,
      releaseDate: "12/05/1988",
      price: "200$",
      uri: "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/abca511947e2be3089c28ee6ade2b072_5bc7a357-f2ab-4ff5-a1bc-878546e3459d_240x360_crop_center.progressive.jpg?v=1573652599",
      category: ["sci-fi", "thriller"],
    },
    {
      name: "Stanger Things",
      totalCopies: 13,
      releaseDate: "18/2/2008",

      price: "200$",
      uri: "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/3dd09dbd568d7aa1a74cb605325c8932_7a131f48-a9c6-42b1-8fb9-8072c42c2196_240x360_crop_center.progressive.jpg?v=1573588596",
    },
    {
      name: "V for Vendata",
      totalCopies: 109,
      releaseDate: "10/6/1993",
      price: "200$",
      uri: "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/c11f66ec0451a36f5aae494b1509b069_bf869227-c34a-449c-83ff-ed093d341dd3_240x360_crop_center.progressive.jpg?v=1573616179",
    },
    {
      name: "A Fabric of reality",
      totalCopies: 56,
      releaseDate: "12/05/1968",
      price: "200$",
      uri: "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/7322c8e245e561fba53f3f847f8bddbb_c32cc465-c8c6-4011-b6d8-ec3d1c75dd0f_240x360_crop_center.progressive.jpg?v=1573585266",
    },
    {
      name: "Jhon Wick",
      totalCopies: 123,
      price: "200$",
      releaseDate: "12/05/1988",
      uri: "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/abca511947e2be3089c28ee6ade2b072_5bc7a357-f2ab-4ff5-a1bc-878546e3459d_240x360_crop_center.progressive.jpg?v=1573652599",
    },
  ],
  cartItems: [],
};
const AllMovieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addCart: (state, action) => {
      state.cartItems.push({
        details: action.payload,
      });
      state.allmovies.forEach((ele, index) => {
        if (ele.name === action.payload) {
          state.allmovies[index]["totalCopies"] -= 1;
        }
      });
    },
  },
});
export const { addCart } = AllMovieSlice.actions;
export default AllMovieSlice;
