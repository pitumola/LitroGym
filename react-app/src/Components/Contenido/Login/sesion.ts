
class Sesion {
    private sesionActiva = false;

    iniciarSesion() {
        this.sesionActiva = true;
        localStorage.setItem("sesionActiva", "true"); 
    }

    cerrarSesion() {
        this.sesionActiva = false;
        localStorage.removeItem("sesionActiva")
    }

    estaSesionActiva(): boolean {
        const sesionGuardada = localStorage.getItem("sesionActiva");
        return sesionGuardada === "true" || this.sesionActiva; 
    }

    get sesionIniciada() {
        return this.estaSesionActiva();
    }
}

export default new Sesion();
