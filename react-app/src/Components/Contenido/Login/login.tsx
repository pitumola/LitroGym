import "./login.css";
import React, { useState, useEffect } from "react";
import sesion from './sesion'; 

interface LogInProps {
  onRegistro: () => void;
}

const LogIn: React.FC<LogInProps> = ({ onRegistro }) => {
  const [correo, setCorreo] = useState("");
  const [contrasena, setContrasena] = useState("");

  useEffect(() => {
  
    sesion.cerrarSesion();
    console.log("Sesión cerrada por defecto al iniciar.");


    if (sesion.estaSesionActiva()) {
      console.log("Sesión ya iniciada previamente.");

      window.location.href = "/home"; 
    }
  }, []);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const usuariosGuardados = localStorage.getItem("usuarios");
    if (usuariosGuardados) {
      const usuarios = JSON.parse(usuariosGuardados);

      const usuarioEncontrado = usuarios.find(
        (usuario: { id: string; contrasena: string }) =>
          usuario.id === correo && usuario.contrasena === contrasena
      );

      if (usuarioEncontrado) {
        sesion.iniciarSesion(); 
        alert("Inicio de sesión exitoso.");

        window.location.href = "/home";
      } else {
        alert("Correo electrónico o contraseña incorrectos.");
        sesion.cerrarSesion(); 
      }
    } else {
      alert("No hay usuarios registrados.");
    }


    setCorreo("");
    setContrasena("");
  };

  return (
    <div className="login">
      <b className="login-titulo">INICIAR SESIÓN</b>
      <div className="login-contenedor">
        <form onSubmit={handleSubmit} className="login-formulario">
          <div className="login-grupoinput">
            <label htmlFor="usuario">
              <p>Correo electrónico: </p>
            </label>
            <br />
            <input
              type="email"
              name="usuario"
              id="usuario"
              required
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
            />
          </div>

          <div className="login-grupoinput">
            <label htmlFor="contrasena">
              <p>Contraseña: </p>
            </label>
            <br />
            <input
              type="password"
              name="contrasena"
              id="contrasena"
              required
              value={contrasena}
              onChange={(e) => setContrasena(e.target.value)}
            />
          </div>

          <button type="submit" className="login-boton">
            Enviar
          </button>
          <p className="login-textoRegistro">
            ¿No tienes cuenta?{" "}
            <button type="button" className="login-boton-registro" onClick={onRegistro}>
              Regístrate aquí
            </button>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LogIn;
