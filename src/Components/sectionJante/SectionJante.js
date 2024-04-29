import React from "react";
import "./sectionJante.css";
import { useSelector, useDispatch } from "react-redux";
import { setJantes, calculateTotal } from "../../app/slices/alpineSlice";
import janteLegende from "../../images/configurateur/jantes/selection/jante-legende.jpg";
import janteSerac from "../../images/configurateur/jantes/selection/jante-serac.jpg";
import janteStandard from "../../images/configurateur/jantes/selection/jante-standard.jpg";
import janteLegendWhite from "../../images/configurateur/jantes/vues/couleur-blanc_jante-legende (2).jpg";
import janteSeracWhite from "../../images/configurateur/jantes/vues/couleur-blanc_jante-serac (2).jpg";
import janteStandardWhite from "../../images/configurateur/jantes/vues/couleur-blanc_jante-standard (2).jpg";
import { RiMoneyEuroCircleFill } from "react-icons/ri";
import { FaArrowUp } from "react-icons/fa";

const Alpine = () => {
  const dataAlpine = useSelector((state) => state.alpine);
  const dispatch = useDispatch();
  const isLegende = dataAlpine.alpine.version.name === 'Legende';

  const handleJantesChange = (newJantesName, newJantesPrice) => {
    let newJantesImage;
    switch (newJantesName) {
      case "standard":
        newJantesImage = janteStandardWhite;
        break;
      case "serac":
        newJantesImage = janteSeracWhite;
        break;
      case "legende":
        newJantesImage = janteLegendWhite;
        break;
      default:
        newJantesImage = ""; // Default case if no match
    }
    dispatch(setJantes({
      name: newJantesName,
      price: newJantesPrice,
      image: newJantesImage
    }));
    dispatch(calculateTotal());
  };

  return (
    <div className="sectionJante">
      <h3>Choisissez vos jantes</h3>
      <div className="container-fluid h-100 p-0 d-flex">
        <div className="col-6 d-flex justify-content-center align-items-center flex-column">
          <div className="card card-stats mb-4 mb-xl-0">
            <div className="card-body">
              <h5 className="card-title text-uppercase text-muted mb-0 d-flex align-items-center">
                Prix Alpine: {dataAlpine.alpine.price} <RiMoneyEuroCircleFill color={"blue"} size={30} />
              </h5>
              <span className="h2 mt-1 fs-5 font-weight-bold mb-0">
                Jantes: {dataAlpine.alpine.jantes.name}
              </span>
              <p className="mt-1 mb-0 text-muted text-sm">
                <span className="text-success mr-2">
                  <FaArrowUp />
                  Prix Jantes: {dataAlpine.alpine.jantes.price}
                </span>
              </p>
            </div>
          </div>
          <div className="color-options container mt-4">
            <button onClick={() => handleJantesChange("standard", 0)}>
              <img src={janteStandard} alt="Standard Jantes" className="jante-img"></img>
            </button>
            <button onClick={() => handleJantesChange("serac", 1000)}>
              <img src={janteSerac} alt="Serac Jantes" className="jante-img"></img>
            </button>
            {isLegende && (
              <button onClick={() => handleJantesChange("legende", 1500)}>
                <img src={janteLegende} alt="Legende Jantes" className="jante-img"></img>
              </button>
            )}
          </div>
        </div>
        <div className="col-6 my-auto d-flex ">
          <img
            className="alpineChangeJantes"
            src={dataAlpine.alpine.jantes.image}
            alt="Alpine Jantes"
          />
        </div>
      </div>
    </div>
  );
};

export default Alpine;
