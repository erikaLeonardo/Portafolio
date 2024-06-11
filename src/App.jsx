import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Index from "./routes/Index";
import Contactos from "./routes/Contactos";
import Portafolio from "./routes/Portafolio";
import ProyectosPython from './routes/ProyectosPython';
import ProyectosPhp from './routes/ProyectosPhp';
import ProyectosJavaScript from './routes/ProyectosJavaScript';
import ProyectosKotlin from './routes/ProyectosKotlin';
import ProyectosJava from './routes/ProyectosJava';
import Header from './components/Header';

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Index />} />
        <Route path='/contactos' element={<Contactos />} />
        <Route path='/portafolio' element={<Portafolio />} />
        <Route path='/portafolio/proyectos-python' element={<ProyectosPython />} />
        <Route path='/portafolio/proyectos-php' element={<ProyectosPhp />} />
        <Route path='/portafolio/proyectos-javascript' element={<ProyectosJavaScript />} />
        <Route path='/portafolio/proyectos-kotlin' element={<ProyectosKotlin />} />
        <Route path='/portafolio/proyectos-java' element={<ProyectosJava />} />
      </Routes>
    </div>
  );
};

export default App;
