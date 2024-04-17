// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import alpineReducer from '../app/slices/alpineSlice';

export const store = configureStore({
  reducer: {
   alpine: alpineReducer,
  },
});
