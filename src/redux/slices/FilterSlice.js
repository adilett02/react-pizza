import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    categories: ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'],
    categoryIndex: 0,
    sortList: ['популярности', 'цене', 'алфавиту'],
    sortArr: ['rating&order=desc', 'price', 'name'],
    sortIndex: 0,
  },
  reducers: {
    setCategoryId: (state, action) => {
      state.categoryIndex = action.payload;
    },
    setSortIndex: (state, action) => {
      state.sortIndex = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setCategoryId, setSortIndex } = filterSlice.actions;

export default filterSlice.reducer;
