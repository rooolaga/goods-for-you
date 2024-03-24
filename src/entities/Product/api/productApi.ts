import { baseApi } from "@/shared/api/baseApi";

export const productApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getAllCategories: build.query({
      query: () => 'products/categories'
    }),
    getAllProducts: build.query({
      query: ({skip, category}) => {
        const categoryParam = category ? `/category/${category}` : '';
        return `products${categoryParam}?limit=9&skip=${skip}`
      },
      serializeQueryArgs: ({endpointName}) => {
        return endpointName;
      },
      merge: (currentCache, newItems, {arg}) => {
        if (arg.skip > 0) {
          currentCache.products.push(...newItems.products);
          return currentCache
        }

        return newItems
      },
      forceRefetch({currentArg, previousArg}) {
        return currentArg !== previousArg
      }
    }),
  })
});

export const {
  useGetAllCategoriesQuery,
  useGetAllProductsQuery,
  useLazyGetAllProductsQuery,
} = productApi;
