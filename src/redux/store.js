import { configureStore } from '@reduxjs/toolkit';
import filterReduser from './slices/FilterSlice';

export default configureStore({
  reducer: {
    filter: filterReduser,
  },
});
