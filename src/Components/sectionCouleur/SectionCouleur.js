import React from "react";
import "./sectionCouleur.css";
import { useSelector, useDispatch } from "react-redux";
import {
  setColor,
  setColorJantes,
  calculateTotal,
} from "../../app/slices/alpineSlice";
import colorWhite from "../../images/configurateur/couleurs/selection/blanc.jpg";
import colorBlack from "../../images/configurateur/couleurs/selection/noir.jpg";
import colorBlue from "../../images/configurateur/couleurs/selection/bleu.jpg";
import colorCarWhiteStandard from "../../images/configurateur/modele/pure/modele_pure-couleur_blanche-jante_standard (1).jpg";
import colorCarBlueStandard from "../../images/configurateur/modele/pure/modele_pure-couleur_bleu-jante_standard (1).jpg";
import colorCarBlackStandard from "../../images/configurateur/modele/pure/modele_pure-couleur_noire-jante_standard (1).jpg";
import legende from "../../images/configurateur/modele/selection/legende.png";
import { RiMoneyEuroCircleFill } from "react-icons/ri";
import { FaArrowUp } from "react-icons/fa";

const Alpine = () => {
  const dataAlpine = useSelector((state) => state.alpine);
  const dispatch = useDispatch();

  React.useEffect(() => {
    handleColorChange(
      "Peinture opaque blanc Glacier",
      0,
      colorCarWhiteStandard,
      dataAlpine.alpine.color.slug
    );
  }, [dataAlpine.alpine.version.name]);

  const handleColorChange = (
    newColorName,
    newColorPrice,
    newColorImage,
    newColorSlug
  ) => {
    dispatch(
      setColor({
        name: newColorName,
        price: newColorPrice,
        image: newColorImage,
        slug: newColorSlug,
      })
    );
    dispatch(calculateTotal());
  };

  return (
    <div className="sectionCouleur vh-100">
      <h3 className="pt-5">Sélectionnez couleurs</h3>
      <div className="container h-100 d-flex">
        <div className="col-6 my-auto">
          <img
            className="alpineChangeColor"
            src={dataAlpine.alpine.color.image}
            alt="Alpine Car"
          />
        </div>
        <div className="col-6 d-flex justify-content-center align-items-center flex-column">
          <div className="card card-stats mb-4 mb-xl-0">
            <div className="card-body">
              <div className="row">
                <h5 className="custom-h5 card-title text-uppercase text-muted mb-0 d-flex align-items-center">
                  Prix Alpine: {dataAlpine.alpine.price} <RiMoneyEuroCircleFill color={"blue"} size={30} />
                </h5>
                <p className="custom-p">
                <span className="mt-1 font-weight-bold mb-0">
                  Couleur: {dataAlpine.alpine.color.name}
                </span>
                </p>
              </div>
              <p className="custom-p mt-1 mb-0 text-muted text-sm">
                <span className="custom-span text-success mr-2">
                  <FaArrowUp />
                  Prix couleur: {dataAlpine.alpine.color.price}
                </span>
              </p>
            </div>
          </div>
          <div className="color-options container mt-4">
            <h3>Couleurs</h3>
            <button
              onClick={() =>
                handleColorChange(
                  "Peinture opaque blanc Glacier",
                  0,
                  colorCarWhiteStandard,
                  "Blanc"
                )
              }
            >
              <img src={colorWhite} alt="Couleur blanche" />
            </button>
            <button
              onClick={() =>
                handleColorChange(
                  "Teinte métallisée Noir Profond",
                  840,
                  colorCarBlackStandard,
                  "Noir"
                )
              }
            >
              <img src={colorBlack} alt="Couleur noire" />
            </button>
            <button
              onClick={() =>
                handleColorChange(
                  "Teinte spéciale Bleu Alpine",
                  1800,
                  colorCarBlueStandard,
                  "Bleu"
                )
              }
            >
              <img src={colorBlue} alt="Couleur bleue" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Alpine;
