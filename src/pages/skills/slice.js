import { createSlice } from '@reduxjs/toolkit';

export const skillsSlice = createSlice({
  name: 'SkillsPage',
  initialState: {
    header: 'Skills-Page',
    title: 'My Skills',
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
export const actions = skillsSlice.actions;

// Selectors
export const selectHeader = (state) => state.SkillsPage.header;
export const selectTitle = (state) => state.SkillsPage.title;
export const selectSubtitle = (state) => state.SkillsPage.subtitle;
export const selectDescription = (state) => state.SkillsPage.description;

// Reducer
export default skillsSlice.reducer;
