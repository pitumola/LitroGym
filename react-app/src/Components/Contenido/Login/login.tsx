import "./login.css";
import React from "react";
interface LogInProps {
  onRegistro: () => void;
}

const LogIn: React.FC<LogInProps> = ({ onRegistro }) => {
  return (
    <div className="login">
      <b className="login-titulo">INICIAR SESIÓN</b>
      <div className="login-contenedor">
        <form action="" className="login-formulario">
          <div className="login-grupoinput">
            <label htmlFor="usuario">
              <p>Nombre de usuario: </p>
            </label>
            <br />
            <input type="text" name="usuario" id="usuario" required />
          </div>

          <div className="login-grupoinput">
            <label htmlFor="contrasena">
              <p>Contraseña: </p>
            </label>
            <br />
            <input type="password" name="contrasena" id="contrasena" required />
          </div>

          <button type="submit" className="login-boton">
            Enviar
          </button>
          <p className="login-textoRegistro">
            ¿No tienes cuenta?{" "}
            <button className="login-boton-registro" onClick={onRegistro}>
              Registrate aqui
            </button>
          </p>
        </form>
      </div>
    </div>
  );
};
export default LogIn;
