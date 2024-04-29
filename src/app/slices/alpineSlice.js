import { createSlice } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import colorWhite from "../../images/configurateur/couleurs/selection/blanc.jpg";
import colorBlue from "../../images/configurateur/couleurs/selection/bleu.jpg";
import colorBlack from "../../images/configurateur/couleurs/selection/noir.jpg";
import colorCarWhite from "../../images/configurateur/modele/pure/modele_pure-couleur_blanche-jante_serac (1).jpg";
import colorCarBlue from "../../images/configurateur/modele/pure/modele_pure-couleur_bleu-jante_serac (1).jpg";
import colorCarBlack from "../../images/configurateur/modele/pure/modele_pure-couleur_noire-jante_serac (1).jpg";
import janteStandardWhite from "../../images/configurateur/jantes/vues/couleur-blanc_jante-standard (2).jpg";
import janteStandardBlue from "../../images/configurateur/jantes/vues/couleur-bleu_jante-standard (3).jpg";
import janteStandardBlack from "../../images/configurateur/jantes/vues/couleur-noir_jante-standard (1).jpg";
import janteSeracWhite from "../../images/configurateur/jantes/vues/couleur-blanc_jante-serac (2).jpg";
import janteSeracBlue from "../../images/configurateur/jantes/vues/couleur-bleu_jante-serac (3).jpg";
import janteSeracBlack from "../../images/configurateur/jantes/vues/couleur-noir_jante-serac (1).jpg";
import janteLegendeWhite from "../../images/configurateur/jantes/vues/couleur-blanc_jante-legende (2).jpg";
import janteLegendeBlue from "../../images/configurateur/jantes/vues/couleur-bleu_jante-legende (3).jpg";
import janteLegendeBlack from "../../images/configurateur/jantes/vues/couleur-noir_jante-legende (1).jpg";
import interieurStandard from "../../images/configurateur/interieurs/selection/cuir-noir_dinamica.jpg";
import packLegende from "../../images/sources-homepage/versions/COMPO-LEGENDE.png";
import packPure from "../../images/sources-homepage/versions/COMPO-PURE.png";
import legende from "../../images/configurateur/modele/selection/legende.png";
import pure from "../../images/configurateur/modele/selection/pure.png";

// État initial du slice
const initialState = {
  alpine: {
    version: {
      name: "pure",
      image1: pure,
      image2: packPure,
      price: 54700,
    },
    color: {
      name: "Peinture opaque blanc Glacier",
      image: colorCarWhite,
      price: 0,
      slug: "Blanc",
    },
    jantes: {
      name: "Standard",
      image: janteStandardWhite,
      price: 0,
    },
    scellerie: {
      name: "Sièges baquets en cuir noir et Dinamica",
      image: interieurStandard,
      price: 0,
    },
  },
};

const rimsImages = {
  standard: {
    image: {
      Blanc: janteStandardWhite,
      Bleu: janteStandardBlue,
      Noir: janteStandardBlack,
    },
  },

  serac: {
    image: {
      Blanc: janteSeracWhite,
      Bleu: janteSeracBlue,
      Noir: janteSeracBlack,
    },
  },

  legende: {
    image: {
      Blanc: janteLegendeWhite,
      Bleu: janteLegendeBlue,
      Noir: janteLegendeBlack,
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
      state.alpine.version.name = action.payload.name;
      state.alpine.version.price = action.payload.price;
      state.alpine.version.image1 = action.payload.image1;
      state.alpine.version.image2 = action.payload.image2;
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
      state.alpine.color.slug = action.payload.slug;
      state.alpine.jantes.image =
        rimsImages["standard"].image[state.alpine.color.slug];
    },
    // Permet de définir les jantes
    setJantes: (state, action) => {
      state.alpine.jantes.name = action.payload.name;
      state.alpine.jantes.price = action.payload.price;
      state.alpine.jantes.image =
        rimsImages[action.payload.name].image[state.alpine.color.slug];
    },
    // Permet de définir la scellerie
    setScellerie: (state, action) => {
      state.alpine.scellerie.name = action.payload.name;
      state.alpine.scellerie.image = action.payload.image;
      state.alpine.scellerie.price = action.payload.price;
    },
    //permet d'additionner tous les choix sélectionné
    calculateTotal: (state) => {
      const versionPrice = state.alpine.version.price || 0;
      const colorPrice = state.alpine.color.price || 0;
      const jantesPrice = state.alpine.jantes.price || 0;
      const scelleriePrice = state.alpine.scellerie.price || 0;
      state.alpine.price =
        versionPrice + colorPrice + jantesPrice + scelleriePrice;
    },
  },
});

// Exportez toutes les actions générées par vos reducers
export const {
  setVersion,
  setPrice,
  setColor,
  setJantes,
  setScellerie,
  calculateTotal,
} = alpineSlice.actions;

// Export du reducer
export default alpineSlice.reducer;
