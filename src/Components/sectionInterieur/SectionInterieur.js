import React from "react";
import "./sectionInterieur.css";
import { useSelector, useDispatch } from "react-redux";
import { setScellerie } from "../../app/slices/alpineSlice";
import cuirBrun from "../../images/configurateur/interieurs/selection/cuir-brun.jpg";
import cuirNoirDinamica from "../../images/configurateur/interieurs/selection/cuir-noir_dinamica.jpg";
import cuirNoirPerfore from "../../images/configurateur/interieurs/selection/cuir-noir_perfore.jpg";
import cuirNoir from "../../images/configurateur/interieurs/selection/cuir-noir.jpg";
import { setColor, calculateTotal } from "../../app/slices/alpineSlice";
import { RiMoneyEuroCircleFill } from "react-icons/ri";
import { FaArrowUp } from "react-icons/fa";

const Alpine = () => {
  const dataAlpine = useSelector((state) => state.alpine);
  const dispatch = useDispatch();

  const handleScellerieChange = (
    newScellerieName,
    newScelleriePrice,
    newScellerieImage
  ) => {
    dispatch(
      setScellerie({
        name: newScellerieName,
        price: newScelleriePrice,
        image: newScellerieImage,
      })
    );
    dispatch(calculateTotal());
  };

  const isLegende = dataAlpine.alpine.version.name === "Legende";

  return (
    <div className="sectionInterieur container">

<div className="card card-stats mb-4 mb-xl-0">
          <div className="card-body">
            <div className="row">
              <h5 className="card-title text-uppercase text-muted mb-0 d-flex align-items-center">
              Prix Alpine: {dataAlpine.alpine.price} <RiMoneyEuroCircleFill color={"blue"} size={30} />
              </h5>
              <span className="h2 mt-1 fs-5 font-weight-bold mb-0">
              Pack intérieur: {dataAlpine.alpine.scellerie.name}
              </span>
            </div>
            <p className="mt-1 mb-0 text-muted text-sm">
              <span className="text-success mr-2">
                <FaArrowUp />
                Prix pack intérieur:{dataAlpine.alpine.scellerie.price}
              </span>
            </p>
          </div>
        </div>
<h3> Sélectionnez votre intérieur</h3>
      <div className="pictureScellerie">
        <img
          className="alpineChangeScellerie"
          src={dataAlpine.alpine.scellerie.image}
          alt="Alpine Car"
        />
      </div>
      <div className="selectScellerie gap-5">
        <button
          onClick={() =>
            handleScellerieChange(
              "Sièges baquets en cuir noir et Dinamica",
              0,
              cuirBrun
            )
          }
        >
          <img src={cuirBrun} alt="Sièges baquets en cuir brun"></img>
        </button>
        <button
          onClick={() =>
            handleScellerieChange(
              "Sièges Confor en cuir noir perforé",
              800,
              cuirNoirDinamica
            )
          }
        >
          <img
            src={cuirNoirDinamica}
            alt="Sièges Confor en cuir noir perforé"
          ></img>
        </button>
        {isLegende && (
          <>
            <button
              onClick={() =>
                handleScellerieChange(
                  "Sièges Confort en cuir noir",
                  0,
                  cuirNoirPerfore
                )
              }
            >
              <img
                src={cuirNoirPerfore}
                alt="Sièges Confort en cuir noir"
              ></img>
            </button>
            <button
              onClick={() =>
                handleScellerieChange(
                  "Sièges Confort en cuir brun",
                  800,
                  cuirNoir
                )
              }
            >
              <img src={cuirNoir} alt="Sièges Confort en cuir brun"></img>
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Alpine;
