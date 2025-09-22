import React from 'react'
import Image from 'next/image'
import tratamiento from '../../public/img/tratamientos.jpg'
import implantes from '../../public/img/implantes.jpg'
import limpieza from '../../public/img/limpieza.jpg'

function tratamientos() {
  return (
    <div className='md:gap-6 md:h-full lg:flex lg:flex-row lg:h-full lg:gap-[150px] bg-white flex flex-col gap-[110px] justify-center items-center pb-16 '>
      <div className='shadow-lg p-2 rounded-lg text-center'><Image src={implantes} alt='implantes' className='md:w-[200px] lg:w-[300px]'></Image><h2 className='p-2'>Implantes Dentales</h2></div>
      <div className='shadow-lg p-2 rounded-lg text-center'><Image src={tratamiento} alt='tratamientos' className='md:w-[200px] lg:w-[300px]'></Image><h2 className='p-2'>Tratamientos</h2></div>
      <div className='shadow-lg p-2 rounded-lg text-center'><Image src={limpieza} alt='limpieza' className='md:w-[200px] lg:w-[300px]'></Image><h2 className='p-2'>Limpienza</h2></div>
    </div>
  )
}

export default tratamientos
