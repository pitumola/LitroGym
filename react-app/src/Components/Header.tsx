import "./header.css";
import logo from "./Imgs/logo.png";
import React from "react";

interface HeaderProps {
  onIniciarSesion: () => void;
  onHomeClick: () => void;
  onContacto: () => void;
}

const Encabezado: React.FC<HeaderProps> = ({
  onIniciarSesion,
  onHomeClick,
  onContacto,
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
        <button className="header-boton" onClick={onHomeClick}>
          HOME
        </button>
        <button className="header-boton" onClick={onIniciarSesion}>
          LOGIN
        </button>
        <button className="header-boton" onClick={onContacto}>
          {" "}
          CONTACTO
        </button>
        <button className="header-boton">¿QUIENES SOMOS?</button>
      </div>
    </div>
  );
};
export default Encabezado;
