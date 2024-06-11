import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className='bg-slate-800 text-white hidden sm:flex text-[18px] sm:w-[438px] sm:place-content-around sm:items-center sm:text-[16px]'>
      <NavLink to="/">Inicio</NavLink>
      <NavLink to="/contactos">Contactos</NavLink>
      <NavLink to="/portafolio">Mi portafolio</NavLink>
    </nav>
  );
};

export default Nav;
