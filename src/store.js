import { useMemo } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

let store;

const initialState = {
  title: 'Melchor Dominguez',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const initStore = (preloadedState = initalState) => {
  return createStore(reducer, preloadedState, composeWithDevTools(applyMiddleware()));
};

export const initalizeStore = (preloadedState) => {
  let _store = store ?? initStore(preloadedState);

  // After navigating to a page with an inital Redux state, merge that state
  // with the current state in the store, and create a new store
  if (preloadedState && store) {
    _store = initStore({
      ...store.getState(),
      ...preloadedState,
    });
    // Reset the current store
    store = undefined;
  }

  // For SSG and SSR always create a new store
  if (typeof window === 'undefined') return _store;
  // Create the store once in the client
  if (!store) store = _store;

  return _store;
};

export const useStore = (initialState) => {
  const store = useMemo(() => initalizeStore(initialState, [initialState]));
  return store;
};
