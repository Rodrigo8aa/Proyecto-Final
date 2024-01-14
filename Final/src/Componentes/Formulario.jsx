import react from "react"

const Formulario = () => {

    return (
        <>

            <h1 class="text-center mt-5 mb-5">
                Aportes del los Visitantes
            </h1>


            <div class="container">
                <form id="formLogin">
                    <div class="mb-3">
                        <label for="user" class="form-label">¿Nombre?</label>
                        <input type="email" class="form-control" id="user" placeholder="anonimo" />
                    </div>
                    <div class="mb-3">
                        <label for="password" class="form-label">Gmail</label>
                        <input type="password" class="form-control" id="User" placeholder="name@example.com" />
                    </div>
                    <select class="form-select" aria-label="Default select example">
                        <option selected>Selecciona una opción</option>
                        <option value="1">Noticia</option>
                        <option value="2">Problema</option>
                    </select>
                    <div class="mb-3">
                        <label for="exampleFormControlTextarea1" class="form-label">Cuentanos</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>

                    <div class="mb-3 text-center">
                        <button onclick="login()" type="button" class="btn btn-success w-50">Enviar</button>
                    </div>
                </form>
            </div>

        </>
    )
}

export default Formulario;