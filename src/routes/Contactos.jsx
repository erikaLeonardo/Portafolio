import React from 'react';
import foto from '../assets/erika.jpg';
import whatsapp from '../assets/whatsapp.png';
import facebook from '../assets/facebook.png';
import linkedin from '../assets/linkedin.png';
import gmail from '../assets/gmail.png';

const whatsappNumber = "5570629973";
const whatsappMessage = "Hola, me gustaría ponerme en contacto contigo.";
const emailAddress = "erika23leonardo@gmail.com";
const emailSubject = "Contacto desde tu sitio web";
const emailBody = "Hola, me gustaría ponerme en contacto contigo.";

const Contactos = () => {
  return (
    <>
      <figure className="bg-slate-100 rounded-xl p-10 dark:bg-slate-950 flex-1 py-6">
        <div className="text-sky-500 dark:text-sky-400 text-center text-[38px] font-serif p-8">
          Contactos
        </div>
        <div className="flex justify-center space-x-20 pt-16">
          <div>
            <a href="https://www.linkedin.com/in/erika-leonardo" target="_blank" rel="noopener noreferrer">
              <img className="w-24 h-24 rounded-lg mx-auto" src={linkedin} alt="linkedin" width="512" height="512"/>
            </a>
          </div>
          <div>
            <a href="https://www.facebook.com/erika.leonardo.737" target="_blank" rel="noopener noreferrer">
              <img className="w-24 h-24 rounded-lg mx-auto" src={facebook} alt="facebook" width="512" height="512"/>
            </a>
          </div>
          <div>
            <a href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`} target="_blank" rel="noopener noreferrer">
              <img className="w-24 h-24 rounded-lg mx-auto" src={whatsapp} alt="whatsapp" width="512" height="512"/>
            </a>
          </div>
          <div>
            <a href={`mailto:${emailAddress}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`} target="_blank" rel="noopener noreferrer">
              <img className="w-24 h-24 rounded-lg mx-auto" src={gmail} alt="gmail" width="512" height="512"/>
            </a>
          </div>
        </div>
      </figure>
    </>
  );
};

export default Contactos;
