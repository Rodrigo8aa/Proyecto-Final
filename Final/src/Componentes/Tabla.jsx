import { useEffect, useState } from "react";
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
        <table className="table">
            <thead className="thead-dark">
                <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Gmail</th>
                    <th scope="col">Direccion</th>
                </tr>
            </thead>
            <tbody>
                <Usuarios usuario={usuariosm} />
            </tbody>
        </table>
    </>
}

export default Tabla;