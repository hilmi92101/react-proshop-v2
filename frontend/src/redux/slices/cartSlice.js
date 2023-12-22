import { createSlice } from '@reduxjs/toolkit';
import { checkExistItem, updateCart } from '../../modules/cartModule';


const initialState = localStorage.getItem('cart')
    ? JSON.parse(localStorage.getItem('cart'))
    : { cartItems: [], shippingAddress: {}, paymentMethod: 'PayPal' };

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            // The item to add to the cart
            const item = action.payload;

            checkExistItem(state, item);
            return updateCart(state, item);
        },
        removeFromCart: (state, action) => {
            // Filter out the item to remove from the cart
            state.cartItems = state.cartItems.filter((x) => x._id !== action.payload);

            // Update the prices and save to storage
            return updateCart(state);
        },
        saveShippingAddress: (state, action) => {
            state.shippingAddress = action.payload;
            //localStorage.setItem('cart', JSON.stringify(state));

            // Update the prices and save to storage
            return updateCart(state);
        },
    },
});

export const { addToCart, removeFromCart, saveShippingAddress } = cartSlice.actions;

export default cartSlice.reducer;