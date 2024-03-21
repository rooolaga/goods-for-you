import { baseApi } from "@/shared/api/baseApi";

export const productApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getAllCategories: build.query({
      query: () => 'products/categories'
    })
  })
});

export const { useGetAllCategoriesQuery } = productApi;
