import React from 'react'
import Image from 'next/image'
import dentista from '../../public/img/dentista.jpg'

function quienes() {
  return (
    <div className='flex flex-row w-full justify-center items-center h-[700px] bg-white gap-[200px] pt-16'>
        <div className='w-[500px] flex flex-col justify-center items-center gap-16'><h1 className='text-2xl font-extrabold'>¿Quiénes Somos?</h1> <h2 className='text-xl text-center' >Dental Studio
         En Dental Studio somos una clínica odontológica dedicada a cuidar tu salud bucal y brindarte la mejor experiencia en cada visita. Nuestro equipo de especialistas ofrece una amplia variedad de tratamientos, desde limpiezas y blanqueamientos dentales hasta ortodoncia, implantes y estética dental, siempre con tecnología de vanguardia y un trato cercano y personalizado.
         Nuestra misión es ayudarte a sonreír con confianza, combinando profesionalismo, innovación y calidez humana en cada servicio.</h2>
        <button className="m-6 px-8 py-4 bg-teal-500 hover:bg-teal-600 text-white font-semibold text-lg rounded-full shadow-lg transition duration-300">
          Contactanos 📱
        </button>
         </div>
        <div><Image src={dentista} width={400}></Image></div>
    </div>
  )
}

export default quienes