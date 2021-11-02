import { configureStore } from '@reduxjs/toolkit';

import { homeReducer } from './pages';

export default configureStore({
  reducer: { HomePage: homeReducer },
});
