import { configureStore } from '@reduxjs/toolkit';

import { homeReducer } from './pages';
import { skillsReducer } from './pages';

export default configureStore({
  reducer: { HomePage: homeReducer, SkillsPage: skillsReducer },
});
