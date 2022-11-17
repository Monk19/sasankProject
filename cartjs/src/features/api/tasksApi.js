import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const postApiSlice = createApi({
  reducerPath: "blogPosts", //where the cached data is stored
  baseQuery: fetchBaseQuery({
    baseUrl: "http://127.0.0.1:8090",
  }),
  tagTypes: ["Movies"],
  endpoints: (builder) => ({
    getAllPosts: builder.query({
      query: () => `/movies`,
      providesTags: ["Movies"],
    }),
    addToCart: builder.mutation({
      query: (postUpdateData) => ({
        url: "/movies/addtocart",
        method: "POST",
        body: postUpdateData,
      }),
      invalidatesTags: ["Movies"],
    }),
  }),
});
export const { useGetAllPostsQuery, useAddToCartMutation } = postApiSlice;
