import "./header.css";
import logo from "./imgs/logo.png";
export default function Encabezado() {
  return (
    <div className="header">
      <div className="leftheader">
        <img src={logo} alt="" id="logo" />
        <p className="name">
          <b>LITROGYM</b>
        </p>
      </div>
      <div className="rightheader">
        <button className="botonheader">HOME</button>
        <button className="botonheader">LOGIN</button>
        <button className="botonheader">CONTACTO</button>
        <button className="botonheader">QUIENES SOMOS</button>
      </div>
    </div>
  );
}
