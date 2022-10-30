import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartItems: [],
    totalPrice: 0,
  },
  reducers: {
    setCartItems: (state, action) => {
      state.cartItems.push(action.payload);
      state.totalPrice = state.totalPrice + action.payload.price;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setCartItems } = cartSlice.actions;

export default cartSlice.reducer;
