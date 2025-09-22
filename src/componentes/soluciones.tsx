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
    <div className='flex flex-row w-100% h-[300px] bg-white justify-center items-center mt-22'>
      <div className='w-[250px] flex flex-col items-center'>
        <Image src={dentista} alt='dentista' className='w-[50px]' width={100}></Image>
        <h2>Ortodoncia</h2>
      </div>
      <div className='w-[250px] flex flex-col items-center'>
        <Image src={dental} alt='dental' className='w-[50px]' width={100}></Image>
        <h2>Implantes</h2>
      </div>
      <div className='w-[250px] flex flex-col items-center'>
        <Image src={analisis} alt='analisis' className='w-[50px]' width={100}></Image>
        <h2>Blancamientos</h2>
      </div>
      <div className='w-[250px] flex flex-col items-center'>
        <Image src={implantes}  alt='implantes' className='w-[50px]' width={100}></Image>
        <h2>Implantes</h2>
      </div>
      <div className='w-[250px] flex flex-col items-center'>
        <Image src={extracciones} alt='extracciones' className='w-[50px]' width={100}></Image>
        <h2>Extracciones</h2>
      </div>
    </div>
    <div  id="servicios"  className='md:flex md:flex-row md:justify-center md:items-center md:mt-0 md:gap-6 md:mb-0 flex flex-col bg-white w-[100%] justify-center items-center text-center gap-[100px] pb-[200px] mt-12'>
      <div className="md:mt-12 md:ml-16"><Image src={odontologa}  alt='odontologa' className='md:w-[300px] w-[450px] lg:w-[500px] rounded-lg shadow-lg hover:shadow-2xl lg:rounded-lg lg:shadow-lg lg:hover:shadow-2xl'></Image></div>
      <div className='md:w-1/2 md:p-4 w-screen flex flex-col gap-6'>
      <h2 className='md:text-xl text-2xl font-extrabold'>Bienvenidos a Dental Studio</h2>
      <h3 className='md:text-2xl lg:text-4xl text-xl font-semibold text-blue-800 '  >EL PODER DE TU SONRISA A TU ALCANCE</h3>
      <p className='md:text-xl lg:text-2xl text-lg w-[100%]'>Somos una red de clínicas odontológicas que brinda tratamiento de odontología general y todas sus especialidades:</p>
      <ul className='md:text-lg text-2xl text-blue-800'><li>◼ Implantes dentales, estética dental, blanqueamiento dental.</li><li>◼ Prótesis dentales, ortodoncia.</li><li>◼ Tratamiento de conducto, extracciones.</li></ul>
      </div>
    </div>
    </div>
  )
}

export default soluciones
