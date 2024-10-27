import { useState } from "react";
import Encabezado from "./Components/Header";
import Footer from "./Components/footer";
import Home from "./Components/Contenido/Home/home";
import LogIn from "./Components/Contenido/Login/login";

export function App() {
  const [mostrarLogIn, setMostrarLogIn] = useState(false);
  const manejarClickIniciarSesion = () => {
    setMostrarLogIn(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const manejarClickHome = () => {
    setMostrarLogIn(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const manejarClickContacto = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  };
  const manejarClickServicios = () => {
    if (!mostrarLogIn) {
      window.scrollTo({
        top: document.body.scrollHeight / 3, //SE TIENE QUE MODIFICAR SI SE AÑADEN COSAS A HOME !!!
        behavior: "smooth",
      });
    } else {
      setMostrarLogIn(false);
      window.scrollTo({
        top: document.body.scrollHeight / 2.5, //SE TIENE QUE MODIFICAR SI SE AÑADEN COSAS A HOME O A LOGIN !!!
        behavior: "smooth",
      });
    }
  };

  return (
    <div id="root">
      <Encabezado
        onIniciarSesion={manejarClickIniciarSesion}
        onHomeClick={manejarClickHome}
        onContacto={manejarClickContacto}
      />
      {mostrarLogIn ? <LogIn /> : <Home />}
      <Footer
        onIniciarSesion={manejarClickIniciarSesion}
        onHomeClick={manejarClickHome}
        onServicios={manejarClickServicios}
      />
    </div>
  );
}

export default App;
