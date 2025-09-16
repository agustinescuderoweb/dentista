'use client'

import Link from "next/link";
import Image from "next/image";
import logo from "../../public/logo/logo.png"
import { useState, useRef, useEffect } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [videoIndex, setVideoIndex] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  const videos = ['/videos/video.mp4', '/videos/video2.mp4'];

  const handleEnded = () => {
    setVideoIndex(prev => (prev + 1) % videos.length);
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.play().catch(() => {});
    }
  }, [videoIndex]);

  return (
    <div className="relative h-screen overflow-hidden">
      {/* ✅ Video de fondo */}
      <video
        ref={videoRef}
        key={videos[videoIndex]}
        className="fixed top-0 left-0 w-full object-cover -z-10"
        src={videos[videoIndex]}
        autoPlay
        muted
        playsInline
        onEnded={handleEnded}
      />

      {/* ✅ Barra de navegación */}
      <nav className="relative z-50 bg-white/80 text-black shadow-lg">
        <div className="w-full max-w-screen-xl mx-auto px-4 py-6 flex items-center justify-between">
          <div className="text-xl font-bold">
            <Image src={logo} alt="logo" width={130} />
          </div>

          {/* Enlaces desktop */}
          <div className="hidden lg:flex space-x-8 font-bold text-lg">
            <Link href="#inicio" className="hover:text-blue-500">Inicio</Link>
            <Link href="#actividades" className="hover:text-blue-500">Servicios</Link>
            <Link href="#quienes-somos" className="hover:text-blue-500">Quiénes somos</Link>
            <Link href="#contactos" className="hover:text-blue-500">Contactos</Link>
          </div>

          {/* Botón hamburguesa */}
          <button
            className="lg:hidden z-50 relative"
            onClick={() => {
              console.log('Botón presionado');
              setIsOpen(!isOpen);
            }}
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* ✅ Menú móvil visible sólo cuando isOpen es true */}
        {isOpen && (
          <div className="lg:hidden px-4 py-6 space-y-2 bg-white flex flex-col text-lg">
            <Link href="#inicio" className="hover:text-blue-800">Inicio</Link>
            <Link href="#actividades" className="hover:text-blue-800">Servicios</Link>
            <Link href="#quienes-somos" className="hover:text-blue-800">¿Quiénes somos?</Link>
            <Link href="#contactos" className="hover:text-blue-800">Contactos</Link>
          </div>
        )}
      </nav>

      {/* ✅ Hero principal debajo del navbar */}
      <div className="relative z-10 flex flex-col items-center justify-start text-center px-4 py-20">
        <h1 className="font-playfair text-blue-800 bg-white text-6xl p-5 md:mr-[400px]">
          ✨Sonreí con confianza
        </h1>
        <h2 className="text-blue-800 bg-white p-3 text-xl mt-3 md:mr-[200px]">
          📆 Reservá tu turno y <strong className="font-bold" style={{ textShadow: '2px 6px 10px orange' }}>empezá a sonreír sin límites.</strong>
        </h2>
        <button className="m-6 px-8 py-4 bg-teal-500 hover:bg-teal-600 text-white font-semibold text-lg rounded-full shadow-lg transition duration-300">
          Reserva tu turno 🦷
        </button>
      </div>
    </div>
  );
}
