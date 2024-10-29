import "./Alimentacion.css";

export default function Alimentacion() {
  return (
    <div className="alimentacion">
      <b className="alimentacion-titulo">ALIMENTACION</b>
      <div className="alimentacion-contenedor">
        <div className="alimentacion-contenedor-contenido">
          <p id="titulo">Recetas:</p>
          <a href="https://www.myprotein.es/thezone/recetas/ganar-masa-muscular-eliminar-grasa/#pechuga">
            · Recetas con pechuga de pollo o pavo
          </a>
          <a href="https://www.myprotein.es/thezone/recetas/ganar-masa-muscular-eliminar-grasa/#carnes">
            · Recetas con otras carnes o queso
          </a>
          <a href="https://www.myprotein.es/thezone/recetas/ganar-masa-muscular-eliminar-grasa/#pescado">
            · Recetas con pescado
          </a>
          <a href="https://www.myprotein.es/thezone/recetas/ganar-masa-muscular-eliminar-grasa/#veganas">
            · Recetas veganas
          </a>
          <a href="https://www.myprotein.es/thezone/recetas/ganar-masa-muscular-eliminar-grasa/#postres">
            · Recetas de postres proteicos
          </a>
          <a href="https://www.myprotein.es/thezone/recetas/ganar-masa-muscular-eliminar-grasa/#airfryer">
            · Recetas en airfryer
          </a>
        </div>
      </div>
    </div>
  );
}
