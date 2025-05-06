// import { createSlice } from '@reduxjs/toolkit';

// const cartSlice = createSlice({
//   name: 'cart',
//   initialState: {
//     items: [], 
//   },
//   reducers: {
//     addToCart: (state, action) => {
//       const product = action.payload;
//       const existingItem = state.items.find(item => item.id === product.id);
//       if (existingItem) {
//         existingItem.quantity++;
//       } else {
//         state.items.push({ ...product, quantity: 1 });
//       }
//     },
//     removeFromCart: (state, action) => {
//       state.items = state.items.filter(item => item.id !== action.payload);
//     },
//     incrementQty: (state, action) => {
//       const item = state.items.find(i => i.id === action.payload);
//       if (item) item.quantity++;
//     },
//     decrementQty: (state, action) => {
//       const item = state.items.find(i => i.id === action.payload);
//       if (item.quantity > 1) {
//         item.quantity--;
//       } else {
//         state.items = state.items.filter(i => i.id !== action.payload);
//       }
//     },
//     clearCart: (state) => {
//       state.items = [];
//     },
//   },
// });

// export const { addToCart, removeFromCart, incrementQty, decrementQty, clearCart } = cartSlice.actions;

// export default cartSlice.reducer;


import { createSlice } from '@reduxjs/toolkit';
// import { clearCart, toggleCart } from './productSlice';


const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartItems: [],
    isCartOpen: false,
  },
  reducers: {
    addToCart: (state, action) => {
      const existing = state.cartItems.find(i => i.id === action.payload.id);
      if (existing) {
        existing.quantity += 1;
      } else {
        state.cartItems.push({ ...action.payload, quantity: 1 });
      }   
    },
    // addToCart: (state, action) => {
    //   const existingItem = state.cartItems.find(item => item.id === action.payload.id);
    //   if (existingItem) {
    //     existingItem.quantity += 1;
    //   } else {
    //     state.cartItems.push({ ...action.payload, quantity: 1 });
    //   }
    // },
    
    increaseQty: (state, action) => {
      const item = state.cartItems.find(i => i.id === action.payload);
      if (item) item.quantity += 1;
    },
    decreaseQty: (state, action) => {
      const item = state.cartItems.find(i => i.id === action.payload);
      if (item && item.quantity > 1) item.quantity -= 1;
      else state.cartItems = state.cartItems.filter(i => i.id !== action.payload);
    },
    removeItem: (state, action) => {
      state.cartItems = state.cartItems.filter(i => i.id !== action.payload);
    },
    toggleCart: (state) => {
      state.isCartOpen = !state.isCartOpen;
    },
    clearCart: (state) => {
      state.cartItems = [];
    },
  },
});

// export const { addToCart, increaseQty, decreaseQty, removeItem, toggleCart } = cartSlice.actions;
export const { addToCart, increaseQty, decreaseQty, removeItem, toggleCart } = cartSlice.actions;

export default cartSlice.reducer;

