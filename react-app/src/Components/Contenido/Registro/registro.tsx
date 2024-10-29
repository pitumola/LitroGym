import "./Registro.css";
import { useState } from "react";
import React from "react";
import emailjs from 'emailjs-com';

interface RegistroProps {
  onHome: () => void;
}

const Registro: React.FC<RegistroProps> = () => {
  const [correo, setCorreo] = useState("");

  const enviarCorreo = (correo: string) => {
    emailjs.send(
      "service_rtaubll", 
      "template_dnvtarf", {
      to_name: "Eduardo",      // Nombre del destinatario
      correo: correo,          // Correo electrónico del destinatario
    },
    '9hzDoDea_-amcBCeu')
    .then((response) => {
      console.log("Correo enviado con éxito!", response.status, response.text);
    })
    .catch((err) => {
      console.error("Error al enviar el correo:", err);
      alert("Ocurrió un error al enviar el correo. Intenta nuevamente.");
    });
    
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const Patronemail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!Patronemail.test(correo)) {
      alert("Por favor, introduce un correo electrónico válido.");
      return;
    }

    // Llama a enviarCorreo aquí
    enviarCorreo(correo);

    alert("Te has registrado con éxito.");

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
            <label htmlFor="usuario">
              <p>Nombre de usuario: </p>
            </label>
            <br />
            <input type="text" name="usuario" id="usuario" required />
          </div>

          <div className="registro-grupoinput">
            <label htmlFor="contrasena">
              <p>Contraseña: </p>
            </label>
            <br />
            <input type="password" name="contrasena" id="contrasena" required />
          </div>

          <button type="submit" className="registro-boton">
            Enviar
          </button>
        </form>

        <script type="text/javascript"
  src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js"></script>

<script type="text/javascript">
  emailjs.init('9hzDoDea_-amcBCeu')
</script>
      </div>
    </div>
  );
};

export default Registro;
