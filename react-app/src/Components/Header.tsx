import React from "react"; // Asegúrate de importar React si no lo has hecho
import "./header.css";
import logo from "./Imgs/logo.png";

// Define la interfaz para las props
interface EncabezadoProps {
  onIniciarSesion: () => void; // Define el tipo de la función
}

export default function Encabezado({ onIniciarSesion }: (EncabezadoProps)) { // Usar la interfaz
  return (
    <div className="header">
      <div className="header-leftheader">
        <img src={logo} alt="" id="logo" />
        <p className="header-name">
          <b>LITROGYM</b>
        </p>
      </div>
      <div className="header-rightheader">
        <button className="header-botonheader">HOME</button>
        <button className="header-botonheader" onClick={onIniciarSesion}>LOGIN</button> {/* Llamar a la función al hacer clic */}
        <button className="header-botonheader">CONTACTO</button>
        <button className="header-botonheader">QUIENES SOMOS</button>
      </div>
    </div>
  );
}
