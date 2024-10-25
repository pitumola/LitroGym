/* eslint-disable @typescript-eslint/no-unused-vars *//* eslint-disable @typescript-eslint/no-unused-vars */
import Encabezado from "./Components/Header";
import Home from "./Components/Contenido/Home/home";


export function App() {
  return (
    <div id="root">
      <Encabezado />
      <Home />
    </div>
  );
}

export default App;
