import { baseApi } from "@/shared/api/baseApi";

export const productApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    updateProduct: build.mutation({
      query: ({ id, ...patch }) => ({
        url: `products/${id}`,
        method: 'PATCH',
        body: patch,
      }),
      async onQueryStarted({id, ...patch}, {dispatch, queryFulfilled}) {
        try {
          const {data} = await queryFulfilled
          dispatch(
            baseApi.util.updateQueryData('getProduct', id, (draft) => {
              return Object.assign(draft, data);
            })
          );
        } catch {
          dispatch(baseApi.util.invalidateTags(['Product']));
        }
      }
    })
  })
});

export const {
  useUpdateProductMutation,
} = productApi;
