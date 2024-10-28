import "./Ejercicios.css";
import TrenSuperior from "../../../vids/TrenSuperior.mp4";
import TrenInferior from "../../../vids/TrenInferior.mp4";

export default function Ejercicios() {
  return (
    <div className="ejercicios">
      <div className="ejercicios-titulo">
        <p>
          <b>EJERCICIOS ESPECIFICOS</b>
        </p>
      </div>
      <div className="ejercicios-nombres">
        <p id="tren1">TREN SUPERIOR</p>
        <p id="tren2">TREN INFERIOR</p>
      </div>
      <div className="ejercicios-tipo">
        <button className="ejercicios-tipo-btn" id="superior">
          <video className="video-fondo" autoPlay loop muted>
            <source src={TrenSuperior} type="video/mp4" />
            Tu navegador no soporta videos.
          </video>
        </button>
      </div>
      <div className="ejercicios-tipo">
        <button className="ejercicios-tipo-btn" id="inferior">
          <video className="video-fondo" autoPlay loop muted>
            <source src={TrenInferior} type="video/mp4" />
            Tu navegador no soporta videos.
          </video>
        </button>
      </div>
    </div>
  );
}
