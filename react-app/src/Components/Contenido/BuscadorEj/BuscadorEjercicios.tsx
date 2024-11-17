import "./BuscadorEjercicios.css";
import { useState } from "react";
import { Ejercicio } from "./Ejercicio";
import abdominales from "../../vids/abdominales.mp4";
import press_inclinado from "../../vids/press_inclinado.mp4";
import remo from "../../vids/remo.mp4";
import cinta from "../../vids/cinta.mp4";
import curl_biceps_unilateral from "../../vids/curl_biceps_unilateral.mp4";
import dominadas from "../../vids/dominadas.mp4";
import empuje_de_caderas from "../../vids/empuje_de_caderas.mp4";
import jalon_al_pecho from "../../vids/jalon_al_pecho.mp4";
import mariposa from "../../vids/mariposa.mp4";
import press_banca from "../../vids/press_banca.mp4";
import remo_barra_inclinado from "../../vids/remo_barra_inclinado.mp4";
import sentadilla from "../../vids/sentadilla.mp4";

const ejercicios: Ejercicio[] = [
  {
    id: 1,
    nombre: "Abdominales",
    tipo: "Fuerza",
    descripcion: "Ejercicio para trabajar el abdomen.",
    videoUrl: abdominales,
  },
  {
    id: 2,
    nombre: "Press Inclinado",
    tipo: "Fuerza",
    descripcion: "Ejercicio para trabajar el pecho alto.",
    videoUrl: press_inclinado,
  },
  {
    id: 3,
    nombre: "Remo",
    tipo: "Fuerza",
    descripcion: "Ejercicio para trabajar la espalda baja.",
    videoUrl: remo,
  },
  {
    id: 4,
    nombre: "cinta",
    tipo: "cardio",
    descripcion: "Ejercicio para disminuir porcentaje de grasa.",
    videoUrl: cinta,
  },
  {
    id: 5,
    nombre: "Curl de Biceps Unilateral",
    tipo: "Fuerza",
    descripcion: "Ejercicio para trabajar el bicpeps.",
    videoUrl: curl_biceps_unilateral,
  },
  {
    id: 6,
    nombre: "Dominadas",
    tipo: "Calistenia",
    descripcion: "Ejercicio para trabajar los dorsales.",
    videoUrl: dominadas,
  },
  {
    id: 7,
    nombre: "Empuje de Caderas",
    tipo: "Fuerza",
    descripcion: "Ejercicio para trabajar los gluteos.",
    videoUrl: empuje_de_caderas,
  },
  {
    id: 8,
    nombre: "Jalón al Pecho",
    tipo: "Fuerza",
    descripcion: "Ejercicio para trabajar la espalda alta.",
    videoUrl: jalon_al_pecho,
  },
  {
    id: 9,
    nombre: "Mariposa",
    tipo: "Fuerza",
    descripcion: "Ejercicio para trabajar el pecho.",
    videoUrl: mariposa,
  },
  {
    id: 10,
    nombre: "Press de Banca",
    tipo: "Fuerza",
    descripcion: "Ejercicio para trabajar el pecho.",
    videoUrl: press_banca,
  },
  {
    id: 11,
    nombre: "Remo con barra inclinado",
    tipo: "Fuerza",
    descripcion: "Ejercicio para trabajar la espalda alta.",
    videoUrl: remo_barra_inclinado,
  },
  {
    id: 12,
    nombre: "Sentadilla",
    tipo: "Fuerza",
    descripcion: "Ejercicio para trabajar los cuádriceps.",
    videoUrl: sentadilla,
  },
  // Agregar más ejercicios
];

const BuscadorEjercicios = () => {
  const [buscador, setBuscador] = useState<string>("");

  const filtroEjercicios = ejercicios.filter((ejercicio) =>
    ejercicio.nombre.toLowerCase().includes(buscador.toLowerCase())
  );

  return (
    <div className="BuscadorEjercicio">
      <div>
        <h2>Buscador de Ejercicios</h2>
        <input
          type="text"
          placeholder="Buscar ejercicio..."
          value={buscador}
          onChange={(e) => setBuscador(e.target.value)}
        />
        <div className="ejercicios-grid">
          {filtroEjercicios.length > 0 ? (
            filtroEjercicios.map((ejercicio) => (
              <div className="ejercicio-card" key={ejercicio.id}>
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
    </div>
  );
};

export default BuscadorEjercicios;
