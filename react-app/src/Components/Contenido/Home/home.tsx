import "./home.css";
import logo from "../../Imgs/logo.png";

export default function Home() {
  return (
    <div>
      <div className="content">
        <div className="info">
          <p className="slogan">
            <b>LITROGYM</b>
          </p>
          <img src={logo} alt="" className="logo2"></img>
          <p className="textContent">
            ALCANZA TUS METAS DENTRO Y FUERA DEL GIMNASIO!
          </p>
          <br />
          <br />
          <p>
            DIETAS PERSONALIZADAS, RUTINAS DIFERENTES Y AJUSTADAS A CADA UNO,
            EJERCICIOS ESPECIFICOS Y MUCHO MÁS
          </p>
        </div>
      </div>
      <div className="end">
        <p className="endName">
          <b>NUESTROS SERVICIOS</b>
        </p>
        <p className="tipo">ALIMENTACION PERSONALIZADA:</p>
        <p className="tipo">CREA TU RUTINA:</p>
        <p className="tipo">EJERCICIOS ESPECÍFICOS:</p>
        <div className="services" id="alimentacion"></div>
        <div className="services" id="rutina"></div>
        <div className="services" id="ejercicios"></div>
      </div>
    </div>
  );
}
