function Titulo() {
  const nombre = "Marcos";
  if (nombre) {
    return <h1>hola {nombre}</h1>;
  }
  return <h1>Hola mundo</h1>;
}

export default Titulo;
