import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const testimonialsApi = createApi({
  reducerPath: "testimonialsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5150/api/" }),
  tagTypes: ["Testimonials"],
  endpoints: (builder) => ({
    getAllTestimonials: builder.query({
      query: () => "testimonials",
      providesTags: ["Testimonials"],
    }),
  }),
});

export const { useGetAllTestimonialsQuery } = testimonialsApi;
