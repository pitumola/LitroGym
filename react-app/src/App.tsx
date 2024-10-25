import { useState } from "react"; // Asegúrate de importar useState
import Encabezado from "./Components/Header";
import Home from "./Components/Contenido/Home/home";
import { LogIn } from "./Components/Contenido/Login/login";

export function App() {
  const [mostrarLogIn, setMostrarLogIn] = useState(false); // Estado para controlar el inicio de sesión

  // Función que cambia el estado a true para mostrar el componente LogIn
  const manejarClickIniciarSesion = () => {
    setMostrarLogIn(true); // Cambiar el estado al hacer clic
  };

  return (
    <div id="root">
      <Encabezado onIniciarSesion={manejarClickIniciarSesion} /> {/* Pasar la función como prop */}
      {mostrarLogIn ? <LogIn /> : <Home />} {/* Renderizar el componente correspondiente */}
    </div>
  );
}

export default App;
