import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5150/" }),
  tagTypes: ["Products"],
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => "products",
      providesTags: ["Products"],
    }),
    // postCereals: builder.mutation({
    //   query: () => ({ url: "cereals/upload", method: "POST" }),
    // }),
  }),
});

export const { useGetAllProductsQuery } = productsApi;
