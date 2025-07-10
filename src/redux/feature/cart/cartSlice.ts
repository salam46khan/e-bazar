import { createSlice } from "@reduxjs/toolkit";
import type { ICardItem, IProduct } from "../../../types/types";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState = {
    cartItems: [] as ICardItem[],
};
const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<IProduct>) => {
            const existingItem = state.cartItems.find(item => item._id === action.payload._id);
            if (existingItem) {
                existingItem.quantity++;
            } else {
                state.cartItems.push({ ...action.payload, quantity: 1 });
            }
        },

        increaseQuantity: (state, action: PayloadAction<string>) => {
            const item = state.cartItems.find(item => item._id === action.payload);
            if (item) {
                item.quantity++;
            }
        },

        decreaseQuantity: (state, action: PayloadAction<string>) => {
            const item = state.cartItems.find(item => item._id === action.payload);
            if (item) {
                if (item.quantity > 1) {
                    item.quantity--;
                }
            }
        },

        clearCart: (state) => {
            state.cartItems = [];
        }
    }
})

export const {addToCart, decreaseQuantity, increaseQuantity, clearCart} = cartSlice.actions
export default cartSlice.reducer