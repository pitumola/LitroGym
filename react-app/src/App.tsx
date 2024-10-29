import { useState } from "react";
import Encabezado from "./Components/Header";
import Footer from "./Components/footer";
import Home from "./Components/Contenido/Home/home";
import LogIn from "./Components/Contenido/Login/login";
import QuienesSomos from "./Components/Contenido/QuienesSomos/quienesSomos";
import Registro from "./Components/Contenido/Registro/registro";
import Alimentacion from "./Components/Contenido/Servicios/Alimentacion/Alimentacion";
import Rutina from "./Components/Contenido/Servicios/Rutina/Rutina";
import Ejercicios from "./Components/Contenido/Servicios/Ejercicios/Ejercicios";
import TrenSuperior from "./Components/Contenido/Servicios/Ejercicios/TrenSuperior";
import TrenInferior from "./Components/Contenido/Servicios/Ejercicios/TrenInferior";
import PavoPollo from "./Components/Contenido/Servicios/Alimentacion/Recetas/PavoPollo/PavoPollo";
import Carnes from "./Components/Contenido/Servicios/Alimentacion/Recetas/Carnes/Carnes";
import Pescados from "./Components/Contenido/Servicios/Alimentacion/Recetas/Pescados/Pescados";
import Vegana from "./Components/Contenido/Servicios/Alimentacion/Recetas/Vegana/Vegana";
import Postres from "./Components/Contenido/Servicios/Alimentacion/Recetas/Postres/Postres";
import AirFryer from "./Components/Contenido/Servicios/Alimentacion/Recetas/AirFryer/AirFryer";

export function App() {
  const [pantalla, setPantalla] = useState(1);

  const manejarClickHome = () => {
    setPantalla(1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const manejarClickIniciarSesion = () => {
    setPantalla(2);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const manejarClickQuienesSomos = () => {
    setPantalla(3);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const manejarClickRegistro = () => {
    setPantalla(4);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const manejarClickAlimentacion = () => {
    setPantalla(5);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const manejarClickRutina = () => {
    setPantalla(6);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const manejarClickEjercicios = () => {
    setPantalla(7);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const manejarClickTrenSuperior = () => {
    setPantalla(8);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const manejarClickTrenInferior = () => {
    setPantalla(9);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const manejarClickPavoPollo = () => {
    setPantalla(10);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const manejarClickCarnes = () => {
    setPantalla(11);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const manejarClickPescados = () => {
    setPantalla(12);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const manejarClickVegana = () => {
    setPantalla(13);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const manejarClickPostres = () => {
    setPantalla(14);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const manejarClickAirFryer = () => {
    setPantalla(15);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const manejarClickContacto = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  };
  const mostrarContenido = () => {
    switch (pantalla) {
      case 1:
        return (
          <Home
            onAlimentacion={manejarClickAlimentacion}
            onRutina={manejarClickRutina}
            onEjercicios={manejarClickEjercicios}
          />
        );
      case 2:
        return <LogIn onRegistro={manejarClickRegistro} />;
      case 3:
        return <QuienesSomos />;
      case 4:
        return <Registro onHome={manejarClickHome} />;
      case 5:
        return (
          <Alimentacion
            onPavoPollo={manejarClickPavoPollo}
            onCarnes={manejarClickCarnes}
            onPescado={manejarClickPescados}
            onVegana={manejarClickVegana}
            onPostres={manejarClickPostres}
            onAirfryer={manejarClickAirFryer}
          />
        );
      case 6:
        return <Rutina />;
      case 7:
        return (
          <Ejercicios
            onSuperior={manejarClickTrenSuperior}
            onInferior={manejarClickTrenInferior}
          />
        );
      case 8:
        return <TrenSuperior />;
      case 9:
        return <TrenInferior />;
      case 10:
        return <PavoPollo onAlimentacion={manejarClickAlimentacion} />;
      case 11:
        return <Carnes onAlimentacion={manejarClickAlimentacion} />;
      case 12:
        return <Pescados onAlimentacion={manejarClickAlimentacion} />;
      case 13:
        return <Vegana onAlimentacion={manejarClickAlimentacion} />;
      case 14:
        return <Postres onAlimentacion={manejarClickAlimentacion} />;
      case 15:
        return <AirFryer onAlimentacion={manejarClickAlimentacion} />;
    }
  };

  return (
    <div id="root">
      <Encabezado
        onIniciarSesion={manejarClickIniciarSesion}
        onHomeClick={manejarClickHome}
        onQuienesSomos={manejarClickQuienesSomos}
        onContacto={manejarClickContacto}
      />
      {mostrarContenido()}

      <Footer
        onHomeClick={manejarClickHome}
        onIniciarSesion={manejarClickIniciarSesion}
        onRegistro={manejarClickRegistro}
        onQuienesSomos={manejarClickQuienesSomos}
        onAlimentacion={manejarClickAlimentacion}
        onRutina={manejarClickRutina}
        onEjercicios={manejarClickEjercicios}
      />
    </div>
  );
}

export default App;
