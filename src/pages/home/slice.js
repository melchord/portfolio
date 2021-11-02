import { createSlice } from '@reduxjs/toolkit';

export const homeSlice = createSlice({
  name: 'HomePage',
  initialState: {
    title: 'Home Page',
    header: 'Melchor Dominguez',
    subtitle: 'Loading Subtitle...',
    description: 'Loading Description...',
  },
  reducers: {
    setTitle: (state, action) => {
      state.title = action.payload;
    },
  },
});

// Action Creators
export const actions = homeSlice.actions;

// Selectors
export const selectTitle = (state) => state.HomePage.title;

// Reducer
export default homeSlice.reducer;
