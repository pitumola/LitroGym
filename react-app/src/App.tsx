import { useState } from "react";
import Encabezado from "./Components/Header";
import Home from "./Components/Contenido/Home/home";
import { LogIn } from "./Components/Contenido/Login/login";

export function App() {
  const [mostrarLogIn, setMostrarLogIn] = useState(false);

  const manejarClickIniciarSesion = () => {
    setMostrarLogIn(true);
  };


  const manejarClickHome = () => {
    setMostrarLogIn(false); 
  };

  return (
    <div id="root">
      <Encabezado 
        onIniciarSesion={manejarClickIniciarSesion} 
        onHomeClick={manejarClickHome} // Pasar la nueva función como prop
      />
      {mostrarLogIn ? <LogIn /> : <Home />}
    </div>
  );
}

export default App;