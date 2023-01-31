import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const testimonialsApi = createApi({
  reducerPath: "testimonialsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5150/" }),
  endpoints: (builder) => ({
    getAllTestimonials: builder.query({
      query: () => "testimonials",
    }),
  }),
});

export const { useGetAllTestimonialsQuery } = testimonialsApi;
