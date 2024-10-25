import "./header.css";
import logo from "./Imgs/logo.png";
export default function Encabezado() {
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
        <button className="header-botonheader">LOGIN</button>
        <button className="header-botonheader">CONTACTO</button>
        <button className="header-botonheader">QUIENES SOMOS</button>
      </div>
    </div>
  );
}
