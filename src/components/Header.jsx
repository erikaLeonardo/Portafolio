import React from 'react';
import logo from '../assets/yoo.png';
import Nav from './Nav';

const Header = () => {
  return (
    <header className='bg-slate-800 flex place-content-between'>
      <img src={logo} alt="logo" width={150} height={150} />
      <Nav />
    </header>
  );
};

export default Header;
