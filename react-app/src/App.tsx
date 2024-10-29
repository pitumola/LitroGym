import { useState } from "react";
import Encabezado from "./Components/Header";
import Footer from "./Components/footer";
import Home from "./Components/Contenido/Home/home";
import LogIn from "./Components/Contenido/Login/login";
import QuienesSomos from "./Components/Contenido/QuienesSomos/quienesSomos";
import Registro from "./Components/Contenido/Registro/registro";
import TrabajaConNosotros from "./Components/Contenido/TrabajaConNosotros/trabajaConNosotros";
import Alimentacion from "./Components/Contenido/Servicios/Alimentacion/Alimentacion";
import Rutina from "./Components/Contenido/Servicios/Rutina/Rutina";
import Ejercicios from "./Components/Contenido/Servicios/Ejercicios/Ejercicios";
import TrenSuperior from "./Components/Contenido/Servicios/Ejercicios/TrenSuperior";
import TrenInferior from "./Components/Contenido/Servicios/Ejercicios/TrenInferior";

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
  const manejarClickTrabajaConNosotros = () => {
    setPantalla(5);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const manejarClickAlimentacion = () => {
    setPantalla(6);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const manejarClickRutina = () => {
    setPantalla(7);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const manejarClickEjercicios = () => {
    setPantalla(8);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const manejarClickTrenSuperior = () => {
    setPantalla(9);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const manejarClickTrenInferior = () => {
    setPantalla(10);
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
        return <Registro />;
      case 5:
        return <TrabajaConNosotros />;
      case 6:
        return <Alimentacion />;
      case 7:
        return <Rutina />;
      case 8:
        return (
          <Ejercicios
            onSuperior={manejarClickTrenSuperior}
            onInferior={manejarClickTrenInferior}
          />
        );
      case 9:
        return <TrenSuperior />;
      case 10:
        return <TrenInferior />;
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
        onTrabajaConNosotros={manejarClickTrabajaConNosotros}
        onAlimentacion={manejarClickAlimentacion}
        onRutina={manejarClickRutina}
        onEjercicios={manejarClickEjercicios}
      />
    </div>
  );
}

export default App;
