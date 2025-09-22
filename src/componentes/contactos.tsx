import React from 'react'
import Image from 'next/image'
import Logo from '../../public/logo/logo.png'
import Facebook from '../../public/logo/facebook.png'
import Instagram from '../../public/logo/instagram.png'

function contactos() {
  return (
    <div id="contactos" className='md:flex md:flex-row md:justify-center lg:w-full lg:h-[250px] flex flex-col justify-center items-center bg-white lg:justify-center lg:flex lg:flex-row lg:gap-32 '>
        <div className='md:p-3 lg:flex lg:justify-center lg:items-center'><Image src={Logo} width={200}></Image></div>
        <div className='md:flex md:flex-row md:justify-center md:items-center md:gap-12 lg:flex lg:flex-row lg:justify-center lg:items-center lg:gap-22 flex flex-col text-center gap-6'><div>
        <h2 className='md:text-2xl md:font-bold lg:text-2xl text-xl font-bold'>Seguinos!</h2></div>
        <div className='md:flex md:flex-col lg:flex lg:flex-row lg:justify-center lg:items-center lg:gap-3 flex flex-col gap-6'>
        <h2 className='md:flex md:flex-row md:justify-center md:gap-3 md:items-center lg:flex lg:flex-row lg:justify-center lg:items-center flex flex-row justify-center items-center text-center'>Instagram<Image src={Instagram} className='md:w-[30px]' width={50}></Image></h2>
        <h2 className='flex flex-row justify-center items-center gap-3'>Facebook<Image src={Facebook} className='md:w-[20px]' width={30}></Image></h2>
        </div><button className="md:m-6 md:px-8 md:py-3 md:bg-teal-500 md:hover:bg-teal-600 md:text-white md:text-white md:font-semibold md:text-lg md:rounded-full md:shadow-lg md:transition md:duration-300 
        m-6 px-8 py-4 bg-teal-500 hover:bg-teal-600 text-white font-semibold text-lg rounded-full shadow-lg transition duration-300">
          Envianos un mensaje! 📱
        </button></div>
    </div>
  )
}

export default contactos