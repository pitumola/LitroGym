import "./footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-logos">
        <button className="footer-logos-btn">
          <i className="fa">&#xf16d;</i>
        </button>
        <button className="footer-logos-btn">
          <i className="fa fa-facebook-official" aria-hidden="true"></i>
        </button>
        <button className="footer-logos-btn">
          <i className="fa fa-github" aria-hidden="true"></i>
        </button>
      </div>
      <div className="footer-content">
        <p className="footer-content-title">LITROGYM</p>
        <p>Entrenamiento personal, nutrición</p>
        <p>C. Romero, 2, 28221 Majadahonda, Madrid</p>
        <p>Trabaja con nosotros</p>
        <p>Datos de contacto</p>
      </div>
    </div>
  );
}
