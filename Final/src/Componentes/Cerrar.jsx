const Cerrar = () => {

    const cerrarcuenta = () => {
        window.sessionStorage.removeItem('usuario');
    }
    return(
        <button 
            className="btn btn-outline-danger"
            onClick={ cerrarcuenta } 
        >Cerrar cuenta
        </button>
    )
}


export default Cerrar;