import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const BaseApi = createApi({
    reducerPath: 'baseApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://e-bazar-server-nine.vercel.app/api'
    }),
    endpoints: (builder) => ({
        getProduct : builder.query({
            query: () => '/products'
        }),

        getSingleProduct: builder.query({
            query: (id: string) => `/product/${id}`
        }),
    })
})

export const {useGetProductQuery, useGetSingleProductQuery} = BaseApi