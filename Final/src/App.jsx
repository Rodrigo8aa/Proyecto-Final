
import './App.css'
import Barra from './Componentes/Barra'
import{ Routes, Route} from "react-router-dom"
import Formulario from './Componentes/Formulario'
import Noticias from './Componentes/Noticias';
// import Login from './Componentes/Login'


const App = () => {
  return (
    <>
    <Barra />


    <Routes>
      {/* <Route path='/login' element={<Login />} /> */}
      <Route path='/formulario' element={<Formulario />} />
      <Route path='/noticias' element={<Noticias />} />
      

    </Routes>
    </>
  );
};

export default App;
