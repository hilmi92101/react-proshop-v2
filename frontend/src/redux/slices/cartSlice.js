import { createSlice } from '@reduxjs/toolkit';
import { checkExistItem, updateCart } from '../../modules/cartModule';


const initialState = localStorage.getItem('cart')
    ? JSON.parse(localStorage.getItem('cart'))
    : { cartItems: [] };

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            // The item to add to the cart
            const item = action.payload;

            checkExistItem(state, item);
            updateCart(state, item);
        },
    },
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;