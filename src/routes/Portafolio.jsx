import React from 'react';
import python from '../assets/python.png';
import php from '../assets/php.png';
import javascript from '../assets/javascript.png';
import kotlin from '../assets/kotlin.png';
import javaimg from '../assets/java.png';
import Proyectos from '../components/Proyectos';

const Portafolio = () => {
  return (
    <>
      <section className="bg-slate-950 min-h-screen p-8">
        <div className="text-sky-500 dark:text-sky-400 text-center text-[38px] font-serif mb-8">
          Mis proyectos
        </div>
        <div className="flex flex-wrap justify-center">
          <Proyectos to="/portafolio/proyectos-python" title="Python" imgSrc={python} altText="Python" />
          <Proyectos to="/portafolio/proyectos-php" title="PHP" imgSrc={php} altText="PHP" />
          <Proyectos to="/portafolio/proyectos-javascript" title="JavaScript" imgSrc={javascript} altText="JavaScript" />
          <Proyectos to="/portafolio/proyectos-kotlin" title="Kotlin" imgSrc={kotlin} altText="Kotlin" />
          <Proyectos to="/portafolio/proyectos-java" title="Java" imgSrc={javaimg} altText="Java" />
        </div>
      </section>
    </>
  );
};

export default Portafolio;
