import React from 'react';
import { NavLink } from 'react-router-dom';

const Proyectos = ({ to, title, imgSrc, altText }) => {
  return (
    <NavLink to={to} className="w-full sm:w-1/2 md:w-1/3 p-4">
      <div className="hover:bg-neutral-800 hover:ring-neutral-500 hover:shadow-md group rounded-lg p-3 bg-slate-700 ring-1 ring-slate-200 shadow-sm font-serif text-center text-white">
        {title}
        <img className="w-24 h-24 rounded-lg mx-auto" src={imgSrc} alt={altText} width="512" height="512"/>
      </div>
    </NavLink>
  );
};

export default Proyectos;
