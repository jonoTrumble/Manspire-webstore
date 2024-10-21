import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  totalCost: 0,
  notification: null,
  addItemCount: 0, // Total count for items added to the cart
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.items.push(action.payload);
      state.totalCost = state.items.reduce((total, item) => total + item.price, 0);

      state.addItemCount += 1; // Increment total count for adding items
      state.notification = `Item added to cart (${state.addItemCount})`; // Update notification message with count
    },
    removeFromCart: (state, action) => {
      state.items.splice(action.payload, 1);
      state.totalCost = state.items.reduce((total, item) => total + item.price, 0);
    },
    clearNotification: (state) => {
      state.notification = null; // Clear notification
    },
  },
});

export const { addToCart, removeFromCart, clearNotification } = cartSlice.actions;
export default cartSlice.reducer;
