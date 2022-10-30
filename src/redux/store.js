import { configureStore } from '@reduxjs/toolkit';
import filterReduser from './slices/FilterSlice';
import cartReducer from './slices/CartSlice';

export default configureStore({
  reducer: {
    filter: filterReduser,
    cart: cartReducer,
  },
});
