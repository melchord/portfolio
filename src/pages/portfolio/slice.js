import { createSlice } from '@reduxjs/toolkit';

export const portfolioSlice = createSlice({
  name: 'PortfolioPage',
  initialState: {
    header: 'Portfolio-Page',
    title: 'My Portfolio',
    subtitle: 'Loading Subtitle...',
    description: 'Loading Description...',
    projects: [],
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
    setProjects: (state, action) => {
      var found = false;
      found = state.projects.find(function (project) {
        if (project.title === action.payload.title) {
          return true;
        }
      });
      if (!found) {
        state.projects.push(action.payload);
      }
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
export const selectProjects = (state) => state.PortfolioPage.projects;

// Reducer
export default portfolioSlice.reducer;
