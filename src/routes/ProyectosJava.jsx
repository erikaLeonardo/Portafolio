import React from "react";
import hospital from "../assets/hospital.png";
import juego from "../assets/juego.png";

const ProyectosJava = () => {
    return (
    <>
      <section className="bg-slate-950 min-h-screen p-8">
        <div className="text-sky-500 dark:text-sky-400 text-center text-[38px] font-serif mb-8">
          Proyectos de Java
        </div>
        <div className="flex flex-wrap justify-center">
          <div className="w-full sm:w-1/2 md:w-1/2 p-4">
            <div className="relative rounded-lg p-3 bg-slate-700 ring-1 ring-slate-200 shadow-sm font-serif text-center text-white">
              Aplicacion Movil Hospital
              <div className="flex m-5 justify-center items-center">
                <img className="w-24 h-24 rounded-lg mx-auto" src={hospital} alt="dulces" width="512" height="512"/>
                <p className="p-5">Aplicacion Movil del registro de un hospital</p>
              </div>
              <a href="https://github.com/erikaLeonardo/AppHospital" target="_blank" rel="noopener noreferrer" className="absolute bottom-2 right-2 bg-blue-600 text-white py-1 px-3 rounded-lg transition duration-300 transform hover:bg-blue-700 hover:scale-105">
                GitHub
              </a> 
            </div>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/2 p-4">
            <div className="relative rounded-lg p-3 bg-slate-700 ring-1 ring-slate-200 shadow-sm font-serif text-center text-white">
              Juego Analizador Lexico
              <div className="flex m-5 justify-center items-center">
                <img className="w-24 h-24 rounded-lg mx-auto" src={juego} alt="baston" width="512" height="512"/>
                <p className="p-5">Juego de escritorio con un analizador lexico y sintactico</p>
              </div>
              <a href="https://github.com/erikaLeonardo/JuegoAnalizador" target="_blank" rel="noopener noreferrer" className="absolute bottom-2 right-2 bg-blue-600 text-white py-1 px-3 rounded-lg transition duration-300 transform hover:bg-blue-700 hover:scale-105">
                GitHub
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
    )
}

export default ProyectosJava;
