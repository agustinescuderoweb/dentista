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
    <div className='h-[900px] bg-white'>
    <div className='flex flex-row w-100% h-[300px] bg-white justify-center items-center mt-22'>
      <div className='w-[250px] flex flex-col items-center'>
        <Image src={dentista} width={100}></Image>
        <h2>Ortodoncia</h2>
      </div>
      <div className='w-[250px] flex flex-col items-center'>
        <Image src={dental} width={100}></Image>
        <h2>Implantes</h2>
      </div>
      <div className='w-[250px] flex flex-col items-center'>
        <Image src={analisis} width={100}></Image>
        <h2>Blancamientos</h2>
      </div>
      <div className='w-[250px] flex flex-col items-center'>
        <Image src={implantes} width={100}></Image>
        <h2>Implantes</h2>
      </div>
      <div className='w-[250px] flex flex-col items-center'>
        <Image src={extracciones} width={100}></Image>
        <h2>Extracciones</h2>
      </div>
    </div>
    <div className='flex flex-row bg-white justify-center aling-center gap-[100px] mb-[200px] mt-12'>
      <div className="shadow-lg shadow-blue-500/50 p-1 bg-white rounded-lg"><Image src={odontologa} width={450}></Image></div>
      <div className='w-[600px] flex flex-col gap-6 mt-12 '>
      <h2 className='text-2xl font-extrabold'>Bienvenidos a Dental Studio</h2>
      <h3 className='text-4xl font-semibold text-blue-800'  >EL PODER DE TU SONRISA A TU ALCANCE</h3>
      <p className='text-2xl'>Somos una red de clínicas odontológicas que brinda tratamiento de odontología general y todas sus especialidades:</p>
      <ul className='text-2xl text-blue-800'><li>◼ Implantes dentales, estética dental, blanqueamiento dental.</li><li>◼ Prótesis dentales, ortodoncia.</li><li>◼ Tratamiento de conducto, extracciones.</li></ul>
      </div>
    </div>
    </div>
  )
}

export default soluciones
