import { createSlice } from '@reduxjs/toolkit';

export const contactSlice = createSlice({
  name: 'ContactPage',
  initialState: {
    header: 'Contact-Page',
    title: 'Contact',
    subtitle: 'Loading Subtitle...',
    description: 'Loading Description...',
    links: '',
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
    setLinks: (state, action) => {
      state.links = JSON.stringify(action.payload);
    },
  },
});

// Action Creators
export const actions = contactSlice.actions;

// Selectors
export const selectHeader = (state) => state.ContactPage.header;
export const selectTitle = (state) => state.ContactPage.title;
export const selectSubtitle = (state) => state.ContactPage.subtitle;
export const selectDescription = (state) => state.ContactPage.description;
export const selectLinks = (state) => state.ContactPage.links;

// Reducer
export default contactSlice.reducer;
