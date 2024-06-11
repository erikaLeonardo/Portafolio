import React from "react";
import tienda from "../assets/tienda.png";
import numeros from "../assets/convertidor.png";

const ProyectosJavaScript = () => {
    return (
    <>
      <section className="bg-slate-950 min-h-screen p-8">
        <div className="text-sky-500 dark:text-sky-400 text-center text-[38px] font-serif mb-8">
          Proyectos de JavaScript
        </div>
        <div className="flex flex-wrap justify-center">
          <div className="w-full sm:w-1/2 md:w-1/2 p-4">
            <div className="relative rounded-lg p-3 bg-slate-700 ring-1 ring-slate-200 shadow-sm font-serif text-center text-white">
              Api Rest Store
              <div className="flex m-5 justify-center items-center">
                <img className="w-24 h-24 rounded-lg mx-auto" src={tienda} alt="dulces" width="512" height="512"/>
                <p className="p-5">API Rest del CRUD para una tienda online</p>
              </div>
              <a href="https://github.com/erikaLeonardo/ApiRestStore" target="_blank" rel="noopener noreferrer" className="absolute bottom-2 right-2 bg-blue-600 text-white py-1 px-3 rounded-lg transition duration-300 transform hover:bg-blue-700 hover:scale-105">
                GitHub
              </a> 
            </div>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/2 p-4">
            <div className="relative rounded-lg p-3 bg-slate-700 ring-1 ring-slate-200 shadow-sm font-serif text-center text-white">
              Convertidor de numeros
              <div className="flex m-5 justify-center items-center">
                <img className="w-24 h-24 rounded-lg mx-auto" src={numeros} alt="baston" width="512" height="512"/>
                <p className="p-5">Programa para convertir numeros decimal a octal, hexadecimal y binario</p>
              </div>
              <a href="https://github.com/erikaLeonardo/convertidor-numeros" target="_blank" rel="noopener noreferrer" className="absolute bottom-2 right-2 bg-blue-600 text-white py-1 px-3 rounded-lg transition duration-300 transform hover:bg-blue-700 hover:scale-105">
                GitHub
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
    )
}

export default ProyectosJavaScript;
