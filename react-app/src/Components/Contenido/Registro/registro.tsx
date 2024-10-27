import "./Registro.css";
import { useState } from "react";

export default function Registro() {
  const [correo, setCorreo] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();


    const Patronemail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; //Que no empiece por @ que despues del @tenga texto y un . y despues del . tenga texto

    if (!Patronemail.test(correo)) {
      alert("Por favor, introduce un correo electrónico válido.");
      return;
    }

    alert("Formulario enviado correctamente.");
  };

  return (
    <div className="registro">
      <b className="registro-titulo">CREA TU CUENTA</b>
      <div className="registro-contenedor">
        <form onSubmit={handleSubmit} className="registro-formulario">
          <div className="registro-grupoinput">
            <label htmlFor="correo">
              <p>Correo electrónico: </p>
            </label>
            <br />
            <input type="email" name="correo"id="correo" required value={correo} onChange={(e) => setCorreo(e.target.value)} 
            />
          </div>

          <div className="registro-grupoinput">
            <label htmlFor="usuario">
              <p>Nombre de usuario: </p>
            </label>
            <br />
            <input type="text" name="usuario" id="usuario" required />
          </div>

          <div className="registro-grupoinput">
            <label htmlFor="contrasena">
              <p>Contraseña: </p>
            </label>
            <br />
            <input type="password" name="contrasena" id="contrasena" required />
          </div>

          <button type="submit" className="registro-boton">
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
}