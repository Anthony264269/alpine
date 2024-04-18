import React from 'react';
import "./sectionInterieur.css";
import { useSelector, useDispatch } from "react-redux";
import { setScellerie } from '../../app/slices/alpineSlice';
import cuirBrun from '../../images/configurateur/interieurs/selection/cuir-brun.jpg';
import cuirNoirDinamica from '../../images/configurateur/interieurs/selection/cuir-noir_dinamica.jpg';
import cuirNoirPerfore from '../../images/configurateur/interieurs/selection/cuir-noir_perfore.jpg';
import cuirNoir from '../../images/configurateur/interieurs/selection/cuir-noir.jpg';


const Alpine = () => {
    const dataAlpine = useSelector((state) => state.alpine);
    const dispatch = useDispatch();

    const handleScellerieChange = (newScellerieName, newScelleriePrice, newScellerieImage) => {

        dispatch(setScellerie({
          name: newScellerieName,
          price: newScelleriePrice,
          image: newScellerieImage,
        }));
      };

      return (
        <div className="sectionInterieur">
          <h3 className=''>Selectionner votre intérieur</h3>
          <p>Pack intérieur: {dataAlpine.alpine.scellerie.name}</p>
          <p>Prix: {dataAlpine.alpine.scellerie.price}$</p>
          <p>Prix Total: {dataAlpine.alpine.price}$</p>
          
          <div className='pictureScellerie'>
          <img className="alpineChangeScellerie" src={dataAlpine.alpine.scellerie.image} alt="Alpine Car" />
          </div>
          <div className='selectScellerie gap-5 container'>
            <h3>Scellerie</h3>
            <button onClick={() => handleScellerieChange('Sièges baquets en cuir noir et Dinamica', 0, cuirBrun)}>
            <img src={cuirBrun}></img>
            </button>
            <button onClick={() => handleScellerieChange('Sièges Confor en cuir noir perforé', 800, cuirNoirDinamica)}>
            <img src={cuirNoirDinamica}></img>
            </button>
            <button onClick={() => handleScellerieChange('Sièges Confort en cuir noir', 0, cuirNoirPerfore)}>
            <img src={cuirNoirPerfore}></img>
            </button>
            <button onClick={() => handleScellerieChange('Sièges Confort en cuir brun', 800, cuirNoir)}>
            <img src={cuirNoir}></img>
            </button>
          </div>
        </div>
      );
    };
    
     
    
    
    export default Alpine;