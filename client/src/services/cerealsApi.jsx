import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const cerealsApi = createApi({
  reducerPath: "cerealsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5150/api/" }),
  tagTypes: ["Cereals"],
  endpoints: (builder) => ({
    getAllCereals: builder.query({
      query: () => "cereals",
      providesTags: ["Cereals"],
    }),
    postCereals: builder.mutation({
      query: () => ({ url: "cereals/upload", method: "POST" }),
    }),
  }),
});

export const { useGetAllCerealsQuery, usePostCerealsMutation } = cerealsApi;
