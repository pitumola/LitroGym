import "./QuienesSomos.css";
import ruben from "../../Imgs/ruben.jpg";
import marcos from "../../Imgs/marcos.jpg";
import edu from "../../Imgs/edu.jpg";
import ahdmad from "../../Imgs/ahmad.jpg";
import { useState } from "react";

function QuienesSomos() {
  const [opacidad, setOpacidad] = useState(true);
  const desopacar = () => setOpacidad(!opacidad);

  return (
    <div className="QuienesSomos">
      <h1>Quiénes Somos</h1>

      <div className="equipo">
        <h2>Nuestro Equipo</h2>

        <button onClick={desopacar} type="button">
          Descubrir Miembros
        </button>

        <div className={`miembros ${opacidad ? "" : "desopaco"}`}>
          <div className="miembro">
            <div className="flip-card">
              <div className="front">
                <img
                  src={marcos}
                  alt="Marcos Lopez"
                  className="imagen-miembro"
                />
              </div>
              <div className="back">
                <p>Marcos Lopez - Desarrollador</p>
              </div>
            </div>
          </div>

          <div className="miembro">
            <div className="flip-card">
              <div className="front">
                <img src={edu} alt="Eduardo Moro" className="imagen-miembro" />
              </div>
              <div className="back">
                <p>Eduardo Moro - Desarrollador</p>
              </div>
            </div>
          </div>

          <div className="miembro">
            <div className="flip-card">
              <div className="front">
                <img src={ahdmad} alt="Ahdmad" className="imagen-miembro" />
              </div>
              <div className="back">
                <p>Ahmad - Desarrollador</p>
              </div>
            </div>
          </div>

          <div className="miembro">
            <div className="flip-card">
              <div className="front">
                <img
                  src={ruben}
                  alt="Ruben Martin"
                  className="imagen-miembro"
                />
              </div>
              <div className="back">
                <p>Rubén Martín - Desarrollador</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mision">
        <h2>Nuestra Misión</h2>
        <p>
          Nuestra misión consiste en ayudar tanto a las personas que acaban de
          empezar en el gimnasio como a las más expertas al seguimiento de su
          progreso dia a dia complementándolo con un asistente de alimentación
          para regular valores como las calorias o las proteinas que contiene
          cada elemento para así conseguir los mejores resultados en el
          gimnasio.{" "}
        </p>
      </div>

      <div className="valores">
        <h2>Valores</h2>
        <ul>
          <li>Integridad: Actuamos con honestidad y transparencia.</li>
          <li>Compromiso: Nos comprometemos a cumplir nuestras promesas.</li>
          <li>Innovación: Fomentamos un ambiente creativo.</li>
          <li>Colaboración: Valoramos el trabajo en equipo.</li>
          <li>
            Diversidad e Inclusión: Celebramos la diversidad y promovemos un
            ambiente inclusivo.
          </li>
          <li>Excelencia: Nos esforzamos por la mejora continua.</li>
          <li>
            Salud: Consideramos fundamental una buena condición física para el
            bienestar personal.
          </li>
        </ul>
      </div>
    </div>
  );
}

export default QuienesSomos;
