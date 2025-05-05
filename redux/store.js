// // import { configureStore } from '@reduxjs/toolkit';
// // import productReducer from './productSlice.js';

// // export const store = configureStore({
// //   reducer: {
// //     products: productReducer,
// //   },
// // });





// redux/store.js
// import { configureStore } from '@reduxjs/toolkit';
// import productReducer from './productSlice';
// import cartReducer from './cartSlice';

// export const store = configureStore({
//   reducer: {
//     products: productReducer,
//     cart: cartReducer,
//   },
// });

// redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import productReducer from './productSlice';

const store = configureStore({
  reducer: {
    products: productReducer,
  },
});

export default store;







