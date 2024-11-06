import { useState } from "react";
import {
  Encabezado,
  Footer,
  Home,
  LogIn,
  QuienesSomos,
  Registro,
  Alimentacion,
  Rutina,
  Ejercicios,
  TrenSuperior,
  TrenInferior,
  PavoPollo,
  Carnes,
  Pescados,
  Vegana,
  Postres,
  AirFryer,
  sesion,
} from "./Components";

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
        if (!sesion.estaSesionActiva) {
          return null;
        }
        return <LogIn onRegistro={manejarClickRegistro} />;
      case 3:
        return <QuienesSomos />;
      case 4:
        return <Registro />;
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
        return <Rutina />;
      case 6:
        if (!sesion.sesionIniciada) {
          setPantalla(2);
          return null;
        }
        return <Rutina />;
      case 7:
        if (!sesion.sesionIniciada) {
          setPantalla(2);
          return null;
        }
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
        onHome={manejarClickHome}
        onQuienesSomos={manejarClickQuienesSomos}
        onContacto={manejarClickContacto}
      />
      {mostrarContenido()}

      <Footer
        onHome={manejarClickHome}
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
