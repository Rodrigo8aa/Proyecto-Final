
import './css/App.css'
import Barra from './Componentes/Barra'
import{ Routes, Route} from "react-router-dom"
import Formulario from './Componentes/Formulario'
// import Login from './Componentes/Login'


const App = () => {
  return (
    <>
    <Barra />


    <Routes>
      {/* <Route path='/login' element={<Login />} /> */}
      <Route path='/formulario' element={<Formulario />} />
      

    </Routes>
    </>
  );
};

export default App;
