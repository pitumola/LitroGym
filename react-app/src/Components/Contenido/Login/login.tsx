import "./login.css";
import React, { useState } from "react";

interface LogInProps {
  onRegistro: () => void;
}

const LogIn: React.FC<LogInProps> = ({ onRegistro }) => {
  const [correo, setCorreo] = useState("");
  const [contrasena, setContrasena] = useState("");

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
        alert("Inicio de sesión exitoso.");

        window.location.href = "/home";
      } else {
        alert("Correo electrónico o contraseña incorrectos.");
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
            <button className="login-boton-registro" onClick={onRegistro}>
              Regístrate aquí
            </button>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LogIn;