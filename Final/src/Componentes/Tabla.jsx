import {useEffect, useState} from "react";
import Usuarios from "./Usuarios";

const API = "https://jsonplaceholder.typicode.com/users";

const Tabla = () => {
    const [usuariosm, setUsuariosm] = useState([]);

    const fetchUsers = async (url) => {
        try {
            const res = await fetch(url);
            const data = await res.json();
            if (data.length > 0) {
                setUsuariosm(data);
            }
            console.log(data);
        } catch (e) {
            console.error(e)
        }
    }


    useEffect(() => {
        fetchUsers(API);
    }, [])
    return <>
        <table>
            <thead>
            <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Gmail</th>
                <th>Direccion</th>
            </tr>
            </thead>
            <tbody>
            <Usuarios usuario={usuariosm}/>
            </tbody>
        </table>
    </>
}

export default Tabla;