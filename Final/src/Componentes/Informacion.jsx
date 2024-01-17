import Table from 'react-bootstrap/Table';
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";

function Informacion() {

    const [usuario, setUsuario] = useState('')
    const [ info, setInfo ] = useState([]);
    const navigate = useNavigate();


    useEffect(() => {

        if(window.sessionStorage.getItem('usuario')){

            setUsuario(usuario);

            setInfo(JSON.parse(window.localStorage.getItem('info')));

            console.log(info);

        }else{
            alert('No eres Messi');
            navigate('*');
        }

    },[]);


    return (

        <>
            <h1 className="text-center mt-5 mb-5">
                Tabla de Usuarios 
            </h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nombre</th>
                        <th>diahora</th>
                        <th>informacion</th>
                    </tr>
                </thead>
                <tbody>

                {info.map((i, index) => ( 
                    <tr key={index}>
                        <td>{ index + 1 }</td>
                        <td>{ i.nombre }</td>
                        <td>{ i.diahora }</td>
                        <td>{ i.cuentanos }</td>
                    </tr>

                ))}


                </tbody>
            </Table>
        </>
    );
}



export default Informacion;