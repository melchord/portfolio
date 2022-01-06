import { createSlice } from '@reduxjs/toolkit';

export const portfolioSlice = createSlice({
  name: 'PortfolioPage',
  initialState: {
    header: 'Portfolio-Page',
    title: 'My Portfolio',
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
export const actions = portfolioSlice.actions;

// Selectors
export const selectHeader = (state) => state.PortfolioPage.header;
export const selectTitle = (state) => state.PortfolioPage.title;
export const selectSubtitle = (state) => state.PortfolioPage.subtitle;
export const selectDescription = (state) => state.PortfolioPage.description;

// Reducer
export default portfolioSlice.reducer;
