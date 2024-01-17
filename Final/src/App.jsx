
import './App.css'
import Barra from './Componentes/Barra'
import{ Routes, Route} from "react-router-dom"
import Formulario from './Componentes/Formulario'
import Tabla from './Componentes/Tabla';
import Desaparecidos from './Componentes/Desaparecidos'
// import Login from './Componentes/Login'



const App = () => {
  return (
    <>
    <Barra />


    <Routes>
      {/* <Route path='/login' element={<Login />} /> */}
      <Route path='/formulario' element={<Formulario />} />
      <Route path='/desaparecidos' element={<Desaparecidos />} />
      <Route path='/tabla' element={<Tabla />} />
      

    </Routes>
    </>
  );
};

export default App;
