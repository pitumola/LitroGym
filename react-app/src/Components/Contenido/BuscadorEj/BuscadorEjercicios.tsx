import "./BuscadorEjercicios.css";
import { useState } from "react";
import { Ejercicio } from "./Ejercicio";
import abdominales from "../../vids/abdominales.mp4";
import press_inclinado from "../../vids/press_inclinado.mp4";
import remo from "../../vids/remo.mp4";

const ejercicios: Ejercicio[] = [
  {
    id: 1,
    nombre: "Abdominales",
    tipo: "Fuerza",
    descripcion: "Ejercicio para trabajar abdomen.",
    videoUrl: abdominales,
  },
  {
    id: 2,
    nombre: "Press Inclinado",
    tipo: "Fuerza",
    descripcion: "Ejercicio para trabajar pecho alto.",
    videoUrl: press_inclinado,
  },
  {
    id: 3,
    nombre: "Remo",
    tipo: "Fuerza",
    descripcion: "Ejercicio para trabajar espalda baja.",
    videoUrl: remo,
  },
  // Agregar más ejercicios
];

const BuscadorEjercicios = () => {
  const [buscador, setBuscador] = useState<string>("");

  const filtroEjercicios = ejercicios.filter((ejercicio) =>
    ejercicio.nombre.toLowerCase().includes(buscador.toLowerCase())
  );

  return (
    <form className="BuscadorEjercicio">
      <div>
        <h2>Buscador de Ejercicios</h2>
        <input
          type="text"
          placeholder="Buscar ejercicio..."
          value={buscador}
          onChange={(e) => setBuscador(e.target.value)}
        />

        <div>
          {filtroEjercicios.length > 0 ? (
            filtroEjercicios.map((ejercicio) => (
              <div key={ejercicio.id}>
                <h3>{ejercicio.nombre}</h3>
                <p>{ejercicio.descripcion}</p>
                <video width="320" height="240" controls>
                  <source src={ejercicio.videoUrl} type="video/mp4" />
                  Tu navegador no soporta el elemento de video.
                </video>
              </div>
            ))
          ) : (
            <p>No se encontraron ejercicios.</p>
          )}
        </div>
      </div>
    </form>
  );
};

export default BuscadorEjercicios;
