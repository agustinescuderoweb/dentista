import React from 'react'
import Image from 'next/image'
import dentista from '../../public/svg/dentista.png'
import dental from '../../public/svg/dental.png'
import analisis from '../../public/svg/analisis.png'
import implantes from '../../public/svg/implantes.png'
import extracciones from '../../public/svg/extracciones.png'
import odontologa from '../../public/img/odontologa.jpg'


function soluciones() {
  return (
    <div className='h-[1400px] lg:h-[1050px] bg-white pb-[200px]'>
    <div className='flex flex-col md:flex md:flex-row w-100% md:gap-1 gap-16 h-[300px] bg-white justify-center items-center mt-22'>
      <div className='flex flex-row'>
      <div className='w-[120px] md:w-[200px] flex flex-col items-center shadow-lg rounded-lg'>
        <Image src={dentista} alt='dentista' className='md:w-[50px] w-[30px]' width={100}></Image>
        <h2 className='text-md'>Ortodoncia</h2>
      </div>
      <div className='w-[120px] md:w-[200px] flex flex-col items-center shadow-lg rounded-lg'>
        <Image src={dental} alt='dental' className='md:w-[50px] w-[30px]' width={100}></Image>
        <h2>Implantes</h2>
      </div>
      <div className='w-[120px] md:w-[200px] flex flex-col items-center shadow-lg rounded-lg'>
        <Image src={analisis} alt='analisis' className='md:w-[50px] w-[30px]' width={100}></Image>
        <h2>Blancamientos</h2>
      </div>
      </div>
      <div className='flex flex-row'>
      <div className='w-[120px] md:w-[200px] flex flex-col items-center shadow-lg rounded-lg'>
        <Image src={implantes}  alt='implantes' className='md:w-[50px] w-[30px]' width={100}></Image>
        <h2>Implantes</h2>
      </div>
      <div className='w-[120px] md:w-[200px] flex flex-col items-center shadow-lg rounded-lg'>
        <Image src={extracciones} alt='extracciones' className='md:w-[50px] w-[30px]' width={100}></Image>
        <h2>Extracciones</h2>
      </div>
      </div>
    </div>
    <div  id="servicios"  className='md:flex md:flex-row md:justify-center md:items-center md:mt-0 md:gap-6 md:mb-0 flex flex-col bg-white w-[100%] justify-center items-center text-center gap-[100px] pb-[200px]'>
      <div className="md:mt-12 md:ml-16 mt-0 ml-0"><Image src={odontologa}  alt='odontologa' className='md:w-[300px] w-[450px] lg:w-[500px] rounded-lg shadow-lg hover:shadow-2xl lg:rounded-lg lg:shadow-lg lg:hover:shadow-2xl'></Image></div>
      <div className='md:w-1/2 md:p-4 md:items-center w-screen flex flex-col gap-6 pl-6 pr-6'>
      <h2 className='md:text-xl text-2xl font-extrabold'>Bienvenidos a Dental Studio</h2>
      <h3 className='md:text-2xl lg:text-4xl text-xl font-semibold text-blue-800 '>EL PODER DE TU SONRISA A TU ALCANCE</h3>
      <p className='md:text-xl lg:text-2xl text-lg w-[100%]'>Somos una red de clínicas odontológicas que brinda tratamiento de odontología general y todas sus especialidades:</p>
      <ul className='md:text-lg text-2xl text-blue-800'><li>◼ Implantes dentales, estética dental, blanqueamiento dental.</li><li>◼ Prótesis dentales, ortodoncia.</li><li>◼ Tratamiento de conducto, extracciones.</li></ul>
      <button className="md:w-[200px] md:flex md:justify-center md:items-center m-3 px-8 py-4 bg-teal-500 hover:bg-teal-600 text-white font-semibold text-lg rounded-full shadow-lg transition duration-300">
          Contactanos 📱 
      </button>
      </div>
    </div>
    </div>
  )
}

export default soluciones
