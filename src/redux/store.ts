import { configureStore } from "@reduxjs/toolkit";
import { BaseApi } from "./api/baseApi";
import cardReducer from './feature/cart/cartSlice'

export const store = configureStore({
    reducer: {
        [BaseApi.reducerPath] : BaseApi.reducer,
        cart: cardReducer ,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(BaseApi.middleware)
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch