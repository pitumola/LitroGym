import "./QuienesSomos.css";
import ruben from "../../Imgs/ruben.jpg";
import marcos from "../../Imgs/marcos.jpg";
import edu from "../../Imgs/edu.jpg";
import ahdmad from "../../Imgs/ahdmad.jpg";
import { useState } from "react";

function QuienesSomos() {
  const [opacidad, setOpacidad] = useState(true);
  const desopacar = () => setOpacidad(!opacidad);

  return (
    <form className="QuienesSomos">
      <h1>Quiénes Somos</h1>

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

      <div className="equipo">
        <h2>Nuestro Equipo</h2>

        <button onClick={desopacar} type="button">
          Descubrir Miembros
        </button>

        <div className={`miembros ${opacidad ? "" : "desopaco"}`}>
          <div className="miembro">
            <img src={marcos} alt="Marcos Lopez" className="imagen-miembro" />
            <h3>Marcos Lopez</h3>
          </div>
          <div className="miembro">
            <img src={edu} alt="Eduardo" className="imagen-miembro" />
            <h3>Eduardo</h3>
          </div>
          <div className="miembro">
            <img src={ahdmad} alt="Ahdmad" className="imagen-miembro" />
            <h3>Ahdmad</h3>
          </div>
          <div className="miembro">
            <img src={ruben} alt="Ruben" className="imagen-miembro" />
            <h3>Ruben</h3>
          </div>
        </div>
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
    </form>
  );
}

export default QuienesSomos;
