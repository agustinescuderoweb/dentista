import React from 'react'
import Image from 'next/image'
import dentista from '../../public/img/dentista.jpg'

function quienes() {
  return (
    <div id="quienes-somos" className='md:gap-12 md:p-6 lg:flex lg:flex-row flex flex-col w-full text-center justify-center items-center lg:h-[900px] bg-white gap-[50px] lg:gap-[100px] pt-16'>
        <div><Image src={dentista} className='rounded-lg shadow-lg hover:shadow-2xl' width={400}></Image></div>
        <div className='md:w-1/2 md:flex md:flex-col md:justify-center md:items-center md:gap-6 lg:w-[500px] lg:flex lg:flex-col lg:justify-center lg:items-center lg:gap-1'>
        <h1 className='md:text-2xl md:font-bold lg:text-2xl lg:font-extrabold text-2xl font-extrabold mb-12'>¿Quiénes Somos?</h1> <h2 className='md:text-md md:text-center lg:text-xl lg:text-center p-6' >Dental Studio
         En Dental Studio somos una clínica odontológica dedicada a cuidar tu salud bucal y brindarte la mejor experiencia en cada visita. Nuestro equipo de especialistas ofrece una amplia variedad de tratamientos, desde limpiezas y blanqueamientos dentales hasta ortodoncia, implantes y estética dental, siempre con tecnología de vanguardia y un trato cercano y personalizado.
         Nuestra misión es ayudarte a sonreír con confianza, combinando profesionalismo, innovación y calidez humana en cada servicio.</h2>
        <button className="m-6 px-8 py-4 bg-teal-500 hover:bg-teal-600 text-white font-semibold text-lg rounded-full shadow-lg transition duration-300">
          Contactanos 📱
        </button>
         </div>
    </div>
  )
}

export default quienes