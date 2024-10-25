import "./header.css";
import logo from "./Imgs/logo.png";
import '../Components/Contenido/Login/login';
import React from 'react';

interface HeaderProps {
  onIniciarSesion: () => void;
  onHomeClick: () => void;
}

const Encabezado: React.FC<HeaderProps> = ({ onIniciarSesion, onHomeClick }) => {
  return (
    <div className="header">
      <div className="header-leftheader">
        <img src={logo} alt="Logo" id="logo" />
        <p className="header-name">
            <b>LITROGYM</b>
        </p>
      </div>
      <div className="header-rightheader">
        <button className="header-botonheader" onClick={onHomeClick} >HOME</button>
        <button className="header-botonheader" onClick={onIniciarSesion}>LOGIN</button>
        <button className="header-botonheader"> CONTACTO</button>
        <button className="header-botonheader">¿QUIENES SOMOS?</button>
      </div>
    </div>
  );
};
export default Encabezado;