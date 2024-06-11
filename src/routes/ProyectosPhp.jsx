import React from "react";
import biblioteca from "../assets/biblioteca.jpeg";
import clinica from "../assets/clinica.png";

const ProyectosPhp = () => {
    return (
    <>
      <section className="bg-slate-950 min-h-screen p-8">
        <div className="text-sky-500 dark:text-sky-400 text-center text-[38px] font-serif mb-8">
          Proyectos PHP
        </div>
        <div className="flex flex-wrap justify-center">
          <div className="w-full sm:w-1/2 md:w-1/2 p-4">
            <div className="relative rounded-lg p-3 bg-slate-700 ring-1 ring-slate-200 shadow-sm font-serif text-center text-white">
              Sistema Web de Biblioteca
              <div className="flex m-5 justify-center items-center">
                <img className="w-24 h-24 rounded-lg mx-auto" src={biblioteca} alt="dulces" width="512" height="512"/>
                <p className="p-5">Sistema web para el control de prestamo de libros de la bibliotca de la univesidad UMB de Jilotepec</p>
              </div>
              <a href="https://github.com/erikaLeonardo/SistemaBiblioteca" target="_blank" rel="noopener noreferrer" className="absolute bottom-2 right-2 bg-blue-600 text-white py-1 px-3 rounded-lg transition duration-300 transform hover:bg-blue-700 hover:scale-105">
                GitHub
              </a> 
            </div>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/2 p-4">
            <div className="relative rounded-lg p-3 bg-slate-700 ring-1 ring-slate-200 shadow-sm font-serif text-center text-white">
              Sistema Web de Clinica Dental
              <div className="flex m-5 justify-center items-center">
                <img className="w-24 h-24 rounded-lg mx-auto" src={clinica} alt="baston" width="512" height="512"/>
                <p className="p-5">Sistema Web para el control de citas agendadas de la Clinica Dental Arce</p>
              </div>
              <a href="https://github.com/erikaLeonardo/Sitio-Web-Clinica-Dental" target="_blank" rel="noopener noreferrer" className="absolute bottom-2 right-2 bg-blue-600 text-white py-1 px-3 rounded-lg transition duration-300 transform hover:bg-blue-700 hover:scale-105">
                GitHub
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
    )
}

export default ProyectosPhp;
