import MarcoP from "./MarcoP";
import MarcoS from "./MarcoS";
import Button from "react-bootstrap/Button"
import { useEffect, useState } from "react";
import "../Noticias.css"



const Noticias =()=>{

    const [noticia, setNoticia] = useState([]);

    useEffect(()=>{
        fetch('https://newsdata.io/api/1/news?apikey=pub_36488df9c011b9ab2feb9f5b0bab53d0839db&q=argentina ')
        .then(Response => Response.json())
        .then(Response => setNoticia(Response.results))
        // .catch(()=>{console.log(Error);})
    },[]);

    const imprimirApi= () => {
        console.log(noticia);
    }


    return(
        <>
        <div className="noticias">
            
        <MarcoP />
        <h1 className="text-center mt-5 mb-5">
                Noticas Principales
            </h1>
        <Button onClick={imprimirApi}>
            Imprimir los datos de la Api
        </Button>

            <MarcoS />
        </div>
        </>
    )
}


export default Noticias;