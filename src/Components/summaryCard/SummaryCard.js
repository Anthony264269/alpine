import React from "react";
import { useSelector } from "react-redux";
import "./summaryCard.css";
import { setColor, calculateTotal } from "../../app/slices/alpineSlice";

const SummaryCard = () => {
  const dataAlpine = useSelector((state) => state.alpine);
  // Obtenez d'autres parties de l'état si nécessaire pour afficher les options

  return (
    <div className="summary-card">
      <h4>Résumé</h4>
      <p>Prix total: {dataAlpine.alpine.price}$</p>
      {/* Affichez ici d'autres options sélectionnées */}
    </div>
  );
};

export default SummaryCard;
