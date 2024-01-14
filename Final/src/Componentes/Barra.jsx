import { Link } from "react-router-dom";




function Barra() {

    return (
        <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary miClase">
                <div className="container-fluid">
                    <Link to="/login" className="navbar-brand" >Login</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to="/noticias" className="nav-link active" aria-current="page">Noticias</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/formulario" className="nav-link" href="#">Aportes</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/logueados" className="nav-link" href="#">Logueados</Link>
                            </li>

                        </ul>

                        
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Barra;