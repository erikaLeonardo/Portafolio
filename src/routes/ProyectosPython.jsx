import React from "react";
import genetico from "../assets/genetico.jpeg";
import ran from "../assets/random-forest.jpg"

const ProyectosPython = () => {
    return (
    <>
      <section className="bg-slate-950 min-h-screen p-8">
        <div className="text-sky-500 dark:text-sky-400 text-center text-[38px] font-serif mb-8">
          Proyectos de Python
        </div>
        <div className="flex flex-wrap justify-center">
          <div className="w-full sm:w-1/2 md:w-1/2 p-4">
            <div className="relative rounded-lg p-3 bg-slate-700 ring-1 ring-slate-200 shadow-sm font-serif text-center text-white">
              Api Random Forest
              <div className="flex m-5 justify-center items-center">
                <img className="w-24 h-24 rounded-lg mx-auto" src={ran} alt="dulces" width="512" height="512"/>
                <p className="p-5">API para la optimizacion de rutas con el modelo Random Forest</p>
              </div>
              <a href="https://github.com/erikaLeonardo/My-API-Random-Forest" target="_blank" rel="noopener noreferrer" className="absolute bottom-2 right-2 bg-blue-600 text-white py-1 px-3 rounded-lg transition duration-300 transform hover:bg-blue-700 hover:scale-105">
                GitHub
              </a> 
            </div>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/2 p-4">
            <div className="relative rounded-lg p-3 bg-slate-700 ring-1 ring-slate-200 shadow-sm font-serif text-center text-white">
              Algoritmo Genetico
              <div className="flex m-5 justify-center items-center">
                <img className="w-24 h-24 rounded-lg mx-auto" src={genetico} alt="baston" width="512" height="512"/>
                <p className="p-5">API para encontrar la mejor ruta implementando el algoritmo genetico</p>
              </div>
              <a href="https://github.com/erikaLeonardo/APIAlgoritmoGenetico" target="_blank" rel="noopener noreferrer" className="absolute bottom-2 right-2 bg-blue-600 text-white py-1 px-3 rounded-lg transition duration-300 transform hover:bg-blue-700 hover:scale-105">
                GitHub
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
    )
}

export default ProyectosPython;
