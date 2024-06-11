import React from 'react';

const Index = () => {
  
  const foto = '../src/assets/erika.jpg'; 

  return (
    <section className="bg-slate-950">
      <div className='sm:flex bg-slate-950'>
        <div className='flex-1 py-6'>
          <img src={foto} alt='foto' className='w-100 h-100 rounded-full mx-auto' width={200} height={200}/>
        </div>
        <div className='flex-1 pt-9 ps-9'>
          <h2 className='text-balance text-white sm:text-[48px] font-bold font-serif'>ERIKA AMAIRANI LEONARDO ARCE</h2>
        </div>
      </div>
      <p className='text-white sm:text-[20px] p-10 text-center space-y-4'>Desarrolladora autónoma con experiencia en desarrollo web y backend, 
        comprometida con ofrecer soluciones eficientes y creativas. Apasionada por aprender nuevos 
        lenguajes y mantenerse actualizada con las últimas tecnologías. En mi tiempo libre, 
        disfruto de la lectura y la formación continua para adaptarme rápidamente a los cambios.
      </p>
    </section>
  );
};

export default Index;
