import React from 'react'
import Image from 'next/image'
import tratamiento from '../../public/img/tratamientos.jpg'
import implantes from '../../public/img/implantes.jpg'
import limpieza from '../../public/img/limpieza.jpg'

function tratamientos() {
  return (
    <div className='h-[300px] bg-white flex flex-row gap-[150px] justify-center items-center'>
      <div className='shadow-lg p-2 rounded-lg'><Image src={implantes} width={300}></Image><h2 className='p-2'>Implantes Dentales</h2></div>
      <div className='shadow-lg p-2 rounded-lg'><Image src={tratamiento} width={300}></Image><h2 className='p-2'>Tratamientos</h2></div>
      <div className='shadow-lg p-2 rounded-lg'><Image src={limpieza} width={300}></Image><h2 className='p-2'>Limpienza</h2></div>
    </div>
  )
}

export default tratamientos
