import "./header.css";
import logo from "./Imgs/logo.png";
import React from "react";

interface HeaderProps {
  onIniciarSesion: () => void;
  onHome: () => void;
  onContacto: () => void;
  onQuienesSomos: () => void;
  onBuscadorEjercicios: () => void;
}

const Encabezado: React.FC<HeaderProps> = ({
  onIniciarSesion,
  onHome,
  onContacto,
  onQuienesSomos,
  onBuscadorEjercicios,
}) => {
  return (
    <div className="header">
      <div className="header-leftheader">
        <img src={logo} alt="Logo" id="logo" />
        <p className="header-name">
          <b>LITROGYM</b>
        </p>
      </div>
      <div className="header-rightheader">
        <button className="header-boton" onClick={onHome}>
          HOME
        </button>
        <button className="header-boton" onClick={onIniciarSesion}>
          INICIAR SESIÓN
        </button>
        <button className="header-boton" onClick={onQuienesSomos}>
          ¿QUIENES SOMOS?
        </button>
        <button className="header-boton" onClick={onContacto}>
          CONTACTO
        </button>
        <button className="header-boton" onClick={onBuscadorEjercicios}>
          BUSCAR EJERCICIO
        </button>
      </div>
    </div>
  );
};
export default Encabezado;
