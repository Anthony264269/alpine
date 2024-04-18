import React from "react";
import "./section-version.css";
import { useSelector, useDispatch } from "react-redux";
import { setVersion } from "../../app/slices/alpineSlice";
import legende from "../../images/configurateur/modele/selection/legende.png";
import pure from "../../images/configurateur/modele/selection/pure.png";
import interieurLegende from "../../images/sources-homepage/versions/COMPO-LEGENDE.png";
import interieurPure from "../../images/sources-homepage/versions/COMPO-PURE.png";
import packLegende from "../../images/sources-homepage/versions/COMPO-LEGENDE.png";
import packPure from "../../images/sources-homepage/versions/COMPO-PURE.png";

const Alpine = () => {
  const dataAlpine = useSelector((state) => state.alpine);
  const dispatch = useDispatch();

  const handleVersionChange = (
    newVersionName,
    newVersionPrice,
    newVersionImage1,
    newVersionImage2
  ) => {
    dispatch(
      setVersion({
        name: newVersionName,
        price: newVersionPrice,
        image1: newVersionImage1,
        image2: newVersionImage2,
      })
    );
  };

  return (
    <div className="sectionVersion text-center">
      <h3 className="d-flex justify-content-center">
        Selectionnez votre version
      </h3>
      <div className="d-flex justify-content-center">
      <button
        className="button1 gap-2 border-primary"
        onClick={() => handleVersionChange("Pure", 54700, pure, interieurPure)}
      >
       <img className="alpineChange" src={pure} alt="Alpine Car" />
      </button>
      <button
        className="button2 gap-2 border-danger"
        onClick={() =>
          handleVersionChange("Legende", 58500, legende, interieurLegende)
        }
      >
        <img className="alpineChange" src={legende} alt="Alpine Car" />
      </button>
      </div>
      <div className="container">
        <p>Version: {dataAlpine.alpine.version.name}</p>
        <p>Prix: {dataAlpine.alpine.version.price}$</p>
        <p>Prix Total: {dataAlpine.alpine.price}$</p>
      </div>
      <div className="selectVersion w-100 text-center d-flex flex-column">
        <div className="alpineAffichage d-flex">
          <img
            className="alpineChange1"
            src={dataAlpine.alpine.version.image1}
            alt="Alpine Car"
          />
          <img
            className="alpineChange2"
            src={dataAlpine.alpine.version.image2}
            alt="Alpine Car"
          />
        </div>
      </div>
    </div>
  );
};

export default Alpine;
