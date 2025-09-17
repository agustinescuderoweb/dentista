import React from 'react'
import Image from 'next/image'
import Logo from '../../public/logo/logo.png'
import Facebook from '../../public/logo/facebook.png'
import Instagram from '../../public/logo/instagram.png'

function contactos() {
  return (
    <div className='w-full h-[400px] bg-white justify-center flex flex-row gap-32'>
        <div className='flex justify-center items-center'><Image src={Logo} width={200}></Image></div>
        <div className='flex flex-row justify-center items-center gap-22'><div><h2 className='text-2xl'>Seguinos!</h2></div><div className='flex flex-row justify-center items-center gap-3'><h2 className='flex flex-row justify-center items-center'>Instagram<Image src={Instagram} width={50}></Image></h2><h2 className='flex flex-row justify-center items-center gap-3'>Facebook<Image src={Facebook} width={30}></Image></h2></div><button className="m-6 px-8 py-4 bg-teal-500 hover:bg-teal-600 text-white font-semibold text-lg rounded-full shadow-lg transition duration-300">
          Envianos un mensaje!
        </button></div>
    </div>
  )
}

export default contactos