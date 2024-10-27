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

  return (
    <div id="root">
      <Encabezado
        onIniciarSesion={manejarClickIniciarSesion}
        onHomeClick={manejarClickHome} // Pasar la nueva función como prop
      />
      {mostrarLogIn ? <LogIn /> : <Home />}
      <Footer
        onIniciarSesion={manejarClickIniciarSesion}
        onHomeClick={manejarClickHome}
      />
    </div>
  );
}

export default App;
