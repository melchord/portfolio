import { createSlice } from '@reduxjs/toolkit';

export const homeSlice = createSlice({
  name: 'HomePage',
  initialState: {
    header: 'Home-Page',
    title: 'Melchor Dominguez',
    subtitle: 'Loading Subtitle...',
    description: 'Loading Description...',
  },
  reducers: {
    setTitle: (state, action) => {
      state.title = action.payload;
    },
    setHeader: (state, action) => {
      state.header = action.payload;
    },
    setSubtitle: (state, action) => {
      state.subtitle = action.payload;
    },
    setDescription: (state, action) => {
      state.description = action.payload;
    },
  },
});

// Action Creators
export const actions = homeSlice.actions;

// Selectors
export const selectHeader = (state) => state.HomePage.header;
export const selectTitle = (state) => state.HomePage.title;
export const selectSubtitle = (state) => state.HomePage.subtitle;
export const selectDescription = (state) => state.HomePage.description;

// Reducer
export default homeSlice.reducer;
