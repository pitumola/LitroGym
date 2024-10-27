import { useState } from "react";
import Encabezado from "./Components/Header";
import Footer from "./Components/footer";
import Home from "./Components/Contenido/Home/home";
import LogIn from "./Components/Contenido/Login/login";
import QuienesSomos from "./Components/Contenido/QuienesSomos/quienesSomos";
import Registro from "./Components/Contenido/Registro/registro";
import TrabajaConNosotros from "./Components/Contenido/TrabajaConNosotros/trabajaConNosotros";

export function App() {
  const [pantalla, setPantalla] = useState(5);

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

  const manejarClickContacto = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  };

  const manejarClickServicios = () => {
    if (pantalla === 1) {
      window.scrollTo({
        top: document.body.scrollHeight / 3, // SE TIENE QUE MODIFICAR SI SE AÑADEN COSAS A HOME !!!
        behavior: "smooth",
      });
    } else {
      setPantalla(1);
      window.scrollTo({
        top: document.body.scrollHeight / 2.5, // SE TIENE QUE MODIFICAR SI SE AÑADEN COSAS A HOME O A LOGIN !!!
        behavior: "smooth",
      });
    }
  };
  const mostrarContenido = () => {
    switch (pantalla) {
      case 1:
        return <Home />;
      case 2:
        return <LogIn onRegistro={manejarClickRegistro} />;
      case 3:
        return <QuienesSomos />;
      case 4:
        return <Registro />;
      case 5:
        return <TrabajaConNosotros />;
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
        onServicios={manejarClickServicios}
      />
    </div>
  );
}

export default App;
