import "./footer.css";
import React from "react";
interface FooterProps {
  onIniciarSesion: () => void;
  onHome: () => void;
  onEjercicios: () => void;
  onQuienesSomos: () => void;
  onRegistro: () => void;
  onAlimentacion: () => void;
  onRutina: () => void;
}
const Footer: React.FC<FooterProps> = ({
  onIniciarSesion,
  onHome,
  onEjercicios,
  onQuienesSomos,
  onRegistro,
  onAlimentacion,
  onRutina,
}) => {
  return (
    <div className="footer">
      <div className="footer-logos">
        <a
          href="https://www.instagram.com/s0ymelen/"
          className="footer-logos-btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa">&#xf16d;</i>
        </a>
        <a
          href="https://github.com/pitumola/LitroGym"
          className="footer-logos-btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa fa-github" aria-hidden="true"></i>
        </a>
        <a
          href="https://open.spotify.com/playlist/37i9dQZF1DWYp5sAHdz27Y"
          className="footer-logos-btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa fa-spotify" aria-hidden="true"></i>
        </a>
      </div>
      <div className="footer-content">
        <div className="footer-content-left">
          <b>
            <p className="footer-content-title">LITROGYM</p>
          </b>
          <p>Entrenamiento personal, nutrición y mucho más</p>
          <p>C. Romero, 2, 28221 Majadahonda, Madrid</p>
          <b>
            <p className="footer-content-title">Datos de contacto</p>
          </b>
          <p>litrocontacto@gmail.com</p>
          <b>
            <p>+34 91 234 56 78</p>
          </b>
        </div>
        <div className="footer-content-right">
          <button className="footer-boton" onClick={onHome}>
            <p>Home</p>
          </button>
          <button className="footer-boton" onClick={onIniciarSesion}>
            <p>Iniciar Sesión</p>
          </button>
          <button className="footer-boton" onClick={onRegistro}>
            <p>Registro</p>
          </button>
          <button className="footer-boton" onClick={onQuienesSomos}>
            <p>¿Quiénes somos?</p>
          </button>
          <button className="footer-boton" onClick={onAlimentacion}>
            <p>Alimentación</p>
          </button>
          <button className="footer-boton" onClick={onRutina}>
            <p>Rutina</p>
          </button>
          <button className="footer-boton" onClick={onEjercicios}>
            <p>Ejercicios</p>
          </button>
        </div>
      </div>
    </div>
  );
};
export default Footer;
