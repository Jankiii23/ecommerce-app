// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';

// export const fetchProducts = createAsyncThunk(
//   'products/fetchProducts',
//   async () => {
//     const res = await axios.get('https://api.escuelajs.co/api/v1/products');
//     return res.data;
//   }
// );

// const productSlice = createSlice({
//   name: 'products',
//   initialState: {
//     allProducts: [],
//     filteredProducts: [],
//     status: 'idle',
//     categories: [],
//     searchQuery: '',
//   },
//   reducers: {
//     filterByCategory: (state, action) => {
//       if (action.payload === 'all') {
//         state.filteredProducts = state.allProducts;
//       } else {
//         state.filteredProducts = state.allProducts.filter(
//           p => p.category.name === action.payload
//         );
//       }
//     },
//     searchProducts: (state, action) => {
//       state.searchQuery = action.payload;
//       state.filteredProducts = state.allProducts.filter(product =>
//         product.title.toLowerCase().includes(action.payload.toLowerCase())
//       );
//     },
//   },
//   extraReducers: builder => {
//     builder.addCase(fetchProducts.fulfilled, (state, action) => {
//       state.allProducts = action.payload;
//       state.filteredProducts = action.payload;
//       state.categories = [
//         'all',
//         ...new Set(action.payload.map(p => p.category.name)),
//       ];
//       state.status = 'succeeded';
//     });
//   },
// });

// export const { filterByCategory, searchProducts } = productSlice.actions;

// export default productSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';

const productSlice = createSlice({
  name: 'products',
  initialState: {
    allProducts: [],
    filteredProducts: [],
    cartItems: [],
    isCartOpen: false,
  },
  reducers: {
    setProducts: (state, action) => {
      state.allProducts = action.payload;
      state.filteredProducts = action.payload;
    },
    filterByCategory: (state, action) => {
      if (action.payload === 'all') {
        state.filteredProducts = state.allProducts;
      } else {
        state.filteredProducts = state.allProducts.filter(
          (p) => p.category.name === action.payload
        );
      }
    },
    searchProduct: (state, action) => {
      const searchTerm = action.payload.toLowerCase();
      state.filteredProducts = state.allProducts.filter(product =>
        product.title.toLowerCase().includes(searchTerm)
      );
    },
    addToCart: (state, action) => {
      state.cartItems.push(action.payload);
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(item => item.id !== action.payload);
    },
    toggleCart: (state) => {
      state.isCartOpen = !state.isCartOpen;
    },
    clearCart: (state) => {
      state.cartItems = [];
    },
  }
});

export const {
  setProducts,
  filterByCategory,
  searchProduct,
  addToCart,
  removeFromCart,
  toggleCart,
  clearCart
} = productSlice.actions;

export default productSlice.reducer;
