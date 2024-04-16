// src/features/monFeature/monSlice.js
import { createSlice } from '@reduxjs/toolkit';

export const monSlice = createSlice({
  name: 'nom',
  initialState: {
    valeur: 0,
  },
  reducers: {
    incrementer: state => {
      state.valeur += 1;
    },
    decrementer: state => {
      state.valeur -= 1;
    },
    incrementerAvecValeur: (state, action) => {
      state.valeur += action.payload;
    },
  },
});

export const { incrementer, decrementer, incrementerAvecValeur } = monSlice.actions;

export default monSlice.reducer;
