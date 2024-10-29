import React, { useState, useEffect } from "react";
import "./Registro.css";
import "../Login/login";


interface Usuario {
  id: string;
  nombre: string;
  contrasena: string;
}

const Registro: React.FC = () => {
  const [correo, setCorreo] = useState("");
  const [nombre, setNombre] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);

  // Cargar usuarios desde localStorage al iniciar el componente
  useEffect(() => {
    const usuariosGuardados = localStorage.getItem("usuarios");
    if (usuariosGuardados) {
      setUsuarios(JSON.parse(usuariosGuardados));
    }
  }, []);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Verificar si el correo electrónico es válido
    const Patronemail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!Patronemail.test(correo)) {
      alert("Por favor, introduce un correo electrónico válido.");
      return;
    }

    // Verificar si el usuario ya está registrado
    const usuarioExistente = usuarios.find((usuario) => usuario.id === correo);
    if (usuarioExistente) {
      alert("Este correo electrónico ya está registrado.");
      return;
    }

    // Crear un nuevo usuario
    const NuevoUsuario: Usuario = {
      id: correo,
      nombre: nombre,
      contrasena: contrasena,
    };

    // Actualizar el estado con el nuevo usuario
    const nuevosUsuarios = [...usuarios, NuevoUsuario];
    setUsuarios(nuevosUsuarios);

    // Guardar los usuarios en localStorage
    localStorage.setItem("usuarios", JSON.stringify(nuevosUsuarios));

    alert("Te has registrado con éxito.");

    // Limpiar los campos
    setCorreo("");
    setNombre("");
    setContrasena("");

    // Redirigir a la página de inicio después de un tiempo
    setTimeout(() => {
      window.location.href = "/home";
    }, 300);
  };

  return (
    <div className="registro">
      <b className="registro-titulo">CREA TU CUENTA</b>
      <div className="registro-contenedor">
        <form onSubmit={handleSubmit} className="registro-formulario">
          <div className="registro-grupoinput">
            <label htmlFor="correo">
              <p>Correo electrónico: </p>
            </label>
            <br />
            <input
              type="email"
              name="correo"
              id="correo"
              required
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
            />
          </div>

          <div className="registro-grupoinput">
            <label htmlFor="nombre">
              <p>Nombre: </p>
            </label>
            <br />
            <input
              type="text"
              name="nombre"
              id="nombre"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              required
            />
          </div>

          <div className="registro-grupoinput">
            <label htmlFor="contrasena">
              <p>Contraseña: </p>
            </label>
            <br />
            <input
              type="password"
              name="contrasena"
              id="contrasena"
              value={contrasena}
              onChange={(e) => setContrasena(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="registro-boton">
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Registro;