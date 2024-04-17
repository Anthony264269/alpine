import { createSlice } from "@reduxjs/toolkit";
import { useDispatch } from 'react-redux';
import colorWhite from '../../images/configurateur/couleurs/selection/blanc.jpg';
import colorBlue from '../../images/configurateur/couleurs/selection/bleu.jpg';
import colorBlack from '../../images/configurateur/couleurs/selection/noir.jpg';
import colorCarWhite from '../../images/configurateur/modele/pure/modele_pure-couleur_blanche-jante_serac (1).jpg';
import colorCarBlue from '../../images/configurateur/modele/pure/modele_pure-couleur_bleu-jante_serac (1).jpg';
import colorCarBlack from '../../images/configurateur/modele/pure/modele_pure-couleur_noire-jante_serac (1).jpg';
import janteStandard from '../../images/configurateur/jantes/vues/couleur-blanc_jante-legende (2).jpg';

// État initial du slice
const initialState = {
  alpine: {
    version: "pure",
    price: 54700,
    color: {
      name: "Peinture opaque blanc Glacier",
      image: colorCarWhite,
      price: 0,
    },
    jantes: {
      name: "Standard",
      image: janteStandard,
      price: 0,
    },
    scellerie: {
      name: "Sièges baquets en cuir noir et Dinamica",
    },
  },
};

// Création du slice
export const alpineSlice = createSlice({
  name: "alpine",
  initialState,
  reducers: {
    // Permet de définir la version
    setVersion: (state, action) => {
      state.alpine.version = action.payload;
    },
    // Permet de définir le prix
    setPrice: (state, action) => {
      state.alpine.price = action.payload;
    },
    // Permet de définir la couleur
    setColor: (state, action) => {
      state.alpine.color.name = action.payload.name;
      state.alpine.color.price = action.payload.price;
      state.alpine.color.image = action.payload.image;
    },
    // Permet de définir les jantes
    setJantes: (state, action) => {
      state.alpine.jantes.name = action.payload.name;
      state.alpine.jantes.price = action.payload.price;
      state.alpine.jantes.image = action.payload.image;
    },
    // Permet de définir la scellerie
    setScellerie: (state, action) => {
      state.alpine.scellerie = action.payload;
    },
  },
});

// Export des action creators
export const { setVersion, setPrice, setColor, setJantes, setScellerie } =
  alpineSlice.actions;

// Export du reducer
export default alpineSlice.reducer;
