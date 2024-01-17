import { useState } from 'react';
import { useNavigate } from "react-router-dom";

const Login = () => {

    const [ Gmail, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');

    const navigate = useNavigate();


    const login = () =>{

        if(Gmail == '' || password == ''){
            alert('introduzca un gmail y un password');
            limpiarDatos();
            return;
        }

        if(Gmail == 'Messi@gmail.com' && password == '3'){
            alert('Bienvenido Leonel');

            window.sessionStorage.setItem('usuario', Gmail);

            navigate('/messi');

        }else{
            alert('Gmail o Password incorrectos');
            navigate('*')
        }

        limpiarDatos();

    }

    function limpiarDatos() {
        setEmail('');
        setPassword('');
    }


    return (

        <>
        <div className='login'>

            <h1 className="text-center mt-5 mb-5">
                Form de Login Admin
            </h1>

            <div className="container">
                <form id="formLogin">
                    <div className="mb-3">
                        <label className="form-label">Gmail </label>
                        <input 
                            type="email" 
                            className="form-control" 
                            /* id="nombre" */ 
                            value = { Gmail }
                            onChange={(e) => setEmail(e.target.value)}
                            required 
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Password </label>
                        <input 
                            type="password" 
                            className="form-control"  
                            value = { password }
                            onChange={(e) => setPassword(e.target.value)}
                            required 
                            />
                    </div>
                    <div className="mb-3 text-center">
                        <button onClick={ login } type="button" className="btn btn-success w-50">Login</button>
                    </div>
                    <div className="mb-3 text-center">
                        <button onClick={ limpiarDatos } className="btn btn-danger w-50">Reset</button>
                    </div>
                </form>
            </div>
                            </div>

        </>
    )
}


export default Login;