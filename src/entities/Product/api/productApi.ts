import { baseApi } from "@/shared/api/baseApi";

export const productApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getAllCategories: build.query({
      query: () => 'products/categories'
    }),
    getAllProducts: build.query({
      query: ({limit, skip, category, search}) => {
        const categoryParam = category ? `/category/${category}` : '';
        const searchPama = search ? `/search` : '';
        `products${categoryParam}${searchPama}?limit=${limit}&skip=${skip}`
        return {
          url: `products${categoryParam}${searchPama}`,
          params: {
            limit,
            skip,
            q: search
          }
        }
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
