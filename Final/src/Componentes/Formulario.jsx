import react, { useState } from "react"

const Formulario = () => {
    const[nombre,setNombre]= useState("");
    const[gmail, setGmail]= useState('')
    const[cuentanos, setCuentanos]= useState('')

    const imprimirDatos=()=>{
        console.log(`Datos ingresados en el formulario. ${nombre} - ${gmail} - ${cuentanos}`)
    }
    return (
        <>

            <h1 class="text-center mt-5 mb-5">
                Aportes del los Visitantes
            </h1>


            <div className="container">
                <form id="formLogin">
                    <div className="mb-3">
                        <label className="form-label">Nombre: </label>
                        <input 
                            type="text" 
                            className="form-control" 
                            /* id="nombre" */ 
                            value = { nombre }
                            onChange={(e) => setNombre(e.target.value)}
                            required 
                        />
                        
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Gmail: </label>
                        <input 
                            type="text" 
                            className="form-control" 
                            /* id="nombre" */ 
                            value = { gmail }
                            onChange={(e) => setGmail(e.target.value)}
                            required 
                        />
                        <div className="mb-3">
                        <label  className="form-label">Cuentanos: </label>
                        <textarea 
                            type="text" 
                            className="form-control" 
                            /* id="nombre" */ 
                            value = { cuentanos }
                            onChange={(e) => setCuentanos(e.target.value)}
                            rows="3"
                            required 
                        />
                        
                    </div>
                    </div>
                    {/* <div class="mb-3">
                        <label for="exampleFormControlTextarea1" class="form-label">Cuentanos</label>
                        <textarea 
                        class="form-control" 
                        id="exampleFormControlTextarea1" 
                        rows="3"/>
                    </div> */}



                    <div class="mb-3 text-center">
                        <button onClick={imprimirDatos} type="button" className="btn btn-success w-50">Enviar</button>
                    </div>
                </form>
            </div>

        </>
    )
}

export default Formulario;