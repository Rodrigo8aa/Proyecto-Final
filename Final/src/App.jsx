import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './css/App.css'
import Navbar from './Componentes/Barra'
import Footer from './Componentes/Footer'
import Barra from './Componentes/Barra'
import{ Routes, Route} from "react-router-dom"
import Login from './Componentes/Login'
import Formulario from './Componentes/Formulario'


const App = () => {
  return (
    <>
    <Barra />
    <Routes>
      <Route path='/login' element={<Login />} />
      <Route path='/formulario' element={<Formulario />} />
    </Routes>

      <Footer />
    </>
  );
};

export default App;
