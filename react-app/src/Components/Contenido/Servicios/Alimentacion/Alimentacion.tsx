import "./Alimentacion.css";
import React from "react";

interface AlimentacionProps {
  onPavoPollo: () => void;
  onCarnes: () => void;
  onPescado: () => void;
  onVegana: () => void;
  onPostres: () => void;
  onAirfryer: () => void;
}
const Alimentacion: React.FC<AlimentacionProps> = ({
  onPavoPollo,
  onCarnes,
  onPescado,
  onVegana,
  onPostres,
  onAirfryer,
}) => {
  return (
    <div className="alimentacion">
      <b className="alimentacion-titulo">ALIMENTACION</b>
      <div className="alimentacion-contenedor">
        <div className="alimentacion-contenedor-contenido">
          <p id="titulo">Recetas:</p>
          <button onClick={onPavoPollo}>
            · Recetas con pechuga de pollo o pavo
          </button>
          <button onClick={onCarnes}>· Recetas con otras carnes o queso</button>
          <button onClick={onPescado}>· Recetas con pescado</button>
          <button onClick={onVegana}>· Recetas veganas</button>
          <button onClick={onPostres}>· Recetas de postres proteicos</button>
          <button onClick={onAirfryer}>· Recetas en airfryer</button>
        </div>
      </div>
    </div>
  );
};
export default Alimentacion;
