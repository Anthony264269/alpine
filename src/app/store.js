// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import monReducer from '../features/monFeature/monSlice';

export const store = configureStore({
  reducer: {
    monNom: monReducer,
  },
});
