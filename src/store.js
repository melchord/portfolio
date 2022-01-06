import { configureStore } from '@reduxjs/toolkit';

import { homeReducer, skillsReducer, portfolioReducer } from './pages';

export default configureStore({
  reducer: { HomePage: homeReducer, SkillsPage: skillsReducer, PortfolioPage: portfolioReducer },
});
