import { configureStore } from '@reduxjs/toolkit';

import { contactReducer, homeReducer, skillsReducer, portfolioReducer } from './pages';

export default configureStore({
  reducer: {
    ContactPage: contactReducer,
    HomePage: homeReducer,
    SkillsPage: skillsReducer,
    PortfolioPage: portfolioReducer,
  },
});
