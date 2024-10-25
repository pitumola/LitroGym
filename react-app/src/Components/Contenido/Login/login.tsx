import './login.css';


export function LogIn(){
    

    return (
        <div className="login">
            <div className="login-contenedor">
            <h1>Inicia Sesión</h1>

            <form action="" className='login-formulario'>
            <div className="login-grupoinput">
                <label htmlFor="usuario"><b>Nombre de usuario: </b></label><br />
                <input type="text" name="usuario" id="usuario" required />
            </div>

            <div className="login-grupoinput">
                <label htmlFor="contrasena"><b>Contraseña: </b></label><br />
                <input type="password" name="contrasena" id="contrasena" required />
            </div>

            <button type="submit" className="login-boton">Enviar</button>
            </form>
            </div>

        </div>

    )
}
