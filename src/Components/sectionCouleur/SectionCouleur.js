import React from 'react';
import './sectionCouleur.css';
import { useSelector, useDispatch } from "react-redux";
import { setColor } from '../../app/slices/alpineSlice';
import colorWhite from '../../images/configurateur/couleurs/selection/blanc.jpg';
import colorBlack from '../../images/configurateur/couleurs/selection/noir.jpg';
import colorBlue from '../../images/configurateur/couleurs/selection/bleu.jpg';
import colorCarWhite from '../../images/configurateur/modele/pure/modele_pure-couleur_blanche-jante_serac (1).jpg';
import colorCarBlue from '../../images/configurateur/modele/pure/modele_pure-couleur_bleu-jante_serac (1).jpg';
import colorCarBlack from '../../images/configurateur/modele/pure/modele_pure-couleur_noire-jante_serac (1).jpg';

const Alpine = () => {
  const dataAlpine = useSelector((state) => state.alpine);
  const dispatch = useDispatch();

  const handleColorChange = (newColorName, newColorPrice, newColorImage) => {
    dispatch(setColor({
      name: newColorName,
      price: newColorPrice,
      image: newColorImage,
    }));
  };

  return (
    <div className="sectionCouleur">
      <div className="container">
        <div className=''>
          <h3>Configurez votre véhicule</h3>
          <p>Couleur: {dataAlpine.alpine.color.name}</p>
          <p>Prix: {dataAlpine.alpine.color.price}$</p>
          <p>Prix Total: {dataAlpine.alpine.price}$</p>
        </div>
        <div className='car-image'>
          <img className="alpineChange" src={dataAlpine.alpine.color.image} alt="Alpine Car" />
        </div>
      </div>
      <div className='color-options container'>
        <h3>Couleurs</h3>
        <button onClick={() => handleColorChange('Peinture opaque blanc Glacier', 0, colorCarWhite)}>
          <img src={colorWhite} alt="Couleur blanche"></img>
        </button>
        <button onClick={() => handleColorChange('Teinte métallisée Noir Profond', 840, colorCarBlack)}>
          <img src={colorBlack} alt="Couleur noire"></img>
        </button>
        <button onClick={() => handleColorChange('Teinte spéciale Bleu Alpine', 1800, colorCarBlue)}>
          <img src={colorBlue} alt="Couleur bleue"></img>
        </button>
      </div>
    </div>
  );
};

export default Alpine;
