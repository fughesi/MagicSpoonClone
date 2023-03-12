import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5150/" }),
  tagTypes: ["Products"],
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => "products",
      method: "GET",
      providesTags: ["Products"],
    }),
    getImages: builder.query({
      query: () => ({ url: "image", method: "GET" }),
    }),
    postImagesToDB: builder.mutation({
      query: (postImage) => ({
        url: "image/uploads",
        method: "POST",
        body: postImage,
      }),
    }),
  }),
});

export const { useGetAllProductsQuery, useGetImagesQuery, usePostImagesToDBMutation } = productsApi;
