import { useState } from 'react';


const Formulario = () => {
    const[nombre,setNombre]= useState("");
    const[diahora, setDiahora]= useState('')
    const[cuentanos, setCuentanos]= useState('')
    const[info, setInfo]= useState([]) 

    const imprimirInfo=()=>{
        console.log(`Informacion ingresados en el formulario. ${nombre} - ${diahora} - ${cuentanos}`)

        setInfo([...info, { nombre, diahora, cuentanos }])


        setTimeout(() => {
            window.localStorage.setItem('info', JSON.stringify(info));
        }, 1000);
    }

    function limpiarInfo() {
        setNombre('');
        setDiahora('');
        setCuentanos('');
    }

    return (
        <>
        <div className='formulario'>


            <h1 className="text-center mt-5 mb-5">
                Proporciona Datos o Informacion
            </h1>


            <div className="container">
                <form id="formLogin">
                    <div className="mb-3">
                        <label className="form-label">Nombre del desaparecido: </label>
                        <input 
                            type="text" 
                            className="form-control" 
                            value = { nombre }
                            onChange={(e) => setNombre(e.target.value)}
                            required 
                        />
                        
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Dia y horario, visto por última vez: </label>
                        <input 
                            type="text" 
                            className="form-control" 
                            value = { diahora }
                            onChange={(e) => setDiahora(e.target.value)}
                            required 
                            />
                        <div className="mb-3">
                        <label  className="form-label">Detalles y mas informacion: </label>
                        <textarea 
                            type="text" 
                            className="form-control"  
                            value = { cuentanos }
                            onChange={(e) => setCuentanos(e.target.value)}
                            rows="3"
                            required 
                        />
                        <div className="mb-3 text-center">
                        <button onClick={ imprimirInfo } type="button" className="btn btn-success w-50">Cargar Informacion</button>
                    </div>
                    <div className="mb-3 text-center">
                        <button onClick={ limpiarInfo } className="btn btn-danger w-75">Reset</button>
                    </div>
                        
                    </div>
                    </div>

                </form>
            </div>

                            </div>
        </>
    )
}

export default Formulario;