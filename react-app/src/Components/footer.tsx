import "./footer.css";
import React from "react";
interface FooterProps {
  onIniciarSesion: () => void;
  onHomeClick: () => void;
  onServicios: () => void;
}
const Footer: React.FC<FooterProps> = ({
  onIniciarSesion,
  onHomeClick,
  onServicios,
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
          href="https://github.com/ahmad-azhari"
          className="footer-logos-btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa fa-github" aria-hidden="true"></i>
        </a>
        <a
          href="https://open.spotify.com/intl-es/artist/0nmUjrUDhkI9SyK4ZFzu4I?si=dxhoe_GiSmaWF3so3Odhow"
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
          <p>ahmad18k@movilesenfiestas.com</p>
          <b>
            <p>+34 642 17 55 13</p>
          </b>
        </div>
        <div className="footer-content-right">
          <button className="footer-boton" onClick={onHomeClick}>
            <p>Home</p>
          </button>
          <button className="footer-boton" onClick={onIniciarSesion}>
            <p>Iniciar Sesión</p>
          </button>
          <button className="footer-boton">
            <p>Registro</p>
          </button>
          <button className="footer-boton">
            <p>¿Quiénes somos?</p>
          </button>
          <button className="footer-boton">
            <p>Trabaja con nosotros</p>
          </button>
          <button onClick={onServicios} className="footer-boton">
            <p>Servicios</p>
          </button>
        </div>
      </div>
    </div>
  );
};
export default Footer;
