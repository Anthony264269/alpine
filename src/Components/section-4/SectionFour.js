import React from 'react';
import "./section-four.css";
import { useSelector, useDispatch } from "react-redux";
import { setJantes, setColor } from '../../app/slices/alpineSlice';
import janteLegende from '../../images/configurateur/jantes/selection/jante-legende.jpg';
import janteSerac from '../../images/configurateur/jantes/selection/jante-serac.jpg';
import janteStandard from '../../images/configurateur/jantes/selection/jante-standard.jpg';
import janteLegendWhite from '../../images/configurateur/jantes/vues/couleur-blanc_jante-legende (2).jpg';
import janteSeracWhite from '../../images/configurateur/jantes/vues/couleur-blanc_jante-serac (2).jpg';
import janteStandardWhite from '../../images/configurateur/jantes/vues/couleur-blanc_jante-standard (2).jpg';
import janteStandardBlack from '../../images/configurateur/jantes/vues/couleur-noir_jante-standard (1).jpg';
import janteSeracBlack from '../../images/configurateur/jantes/vues/couleur-noir_jante-serac (1).jpg';
import janteLegenddBlack from '../../images/configurateur/jantes/vues/couleur-noir_jante-legende (1).jpg';


const Alpine = () => {
    const dataAlpine = useSelector((state) => state.alpine);
    const dispatch = useDispatch();

    const handleJantesChange = (newJantesName, newJantesPrice, newJantesImage) => {

        dispatch(setJantes({
          name: newJantesName,
          price: newJantesPrice,
          image: newJantesImage,
        }));
      };

      return (
        <div className="sectionFour">
          <h3 className='d-flex justify-content-center'>Selectionner vos Jantes</h3>
          <p>Jantes: {dataAlpine.alpine.jantes.name}</p>
          <p>Prix: {dataAlpine.alpine.jantes.price}$</p>
          <p>Prix Total: {dataAlpine.alpine.price}$</p>
          
          <div className='pictureJante container col-6'>
          <img className="alpineChangeJantes" src={dataAlpine.alpine.jantes.image} alt="Alpine Car" />
          </div>
          <div className='selectJantes d-flex col-6'>
            <h3>Jantes</h3>
            <button onClick={() => handleJantesChange('Standard', 0, janteStandardWhite)}>
            <img src={janteStandard}></img>
            </button>
            <button onClick={() => handleJantesChange('Serac', 1000, janteSeracWhite)}>
            <img src={janteSerac}></img>
            </button>
            <button onClick={() => handleJantesChange('Legende', 0, janteLegendWhite)}>
            <img src={janteLegende}></img>
            </button>
          </div>
        </div>
      );
    };
    
     
    
    
    export default Alpine;



