import { baseApi } from "@/shared/api/baseApi";

export const quizRecommendApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getRecommendedProducts: build.query({
      async queryFn(categories, _queryApi, _extraOptions, fetchWithBQ) {
        let data = await Promise.all(
          categories.map(item => fetchWithBQ(`products/category/${item}`))
        );

        data = data.reduce((acc, item) => [...acc, ...item.data.products], []);
        data.sort((a, b) => b.rating - a.rating);

        return {data: data.slice(0, 3)};
      }
    })
  })
});

export const {
  useLazyGetRecommendedProductsQuery,
} = quizRecommendApi;
