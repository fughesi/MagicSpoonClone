import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const cerealsApi = createApi({
  reducerPath: "cerealsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5150/" }),
  tagTypes: ["Cereals"],
  endpoints: (builder) => ({
    getAllCereals: builder.query({
      query: () => "cereals",
      providesTags: ["Cereals"],
    }),
  }),
});

export const { useGetAllCerealsQuery } = cerealsApi;
