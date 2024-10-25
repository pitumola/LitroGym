/* eslint-disable @typescript-eslint/no-unused-vars */
import Encabezado from "./Components/Header";
import { LogIn } from "./Components/Contenido/Login/login";

export function App() {
  return (
    <div id="root">
      <Encabezado />
      <LogIn/>

    </div>
  );
}

export default App;
