import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Messi = () => {

    const [usuario, setUsuario] = useState('')
    const navigate = useNavigate();


    useEffect(() => {
        if(window.sessionStorage.getItem('usuario')){
            setUsuario(usuario);
        }else{
            alert('No eres Messi');
            navigate('*');
        }

    },[]);

    return (
        <>
            <h1 className="text-center mt-5 mb-5">
                Bienvenido Campeon del Mundo
            </h1>

            <div className="text-center mt-5 mb-5">
                <img 
                    src="https://fotos.perfil.com//2023/04/14/900/0/lionel-messi-1546680.jpg" 
                    alt="error en el login" 
                />
            </div>
        </>
    )
}

export default Messi;