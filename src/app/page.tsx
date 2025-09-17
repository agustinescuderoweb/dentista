import React from 'react'
import Headear from '@/componentes/header'
import Soluciones from '@/componentes/soluciones'
import Tratamientos from '@/componentes/tratamientos'
import Agenda from '@/componentes/agenda'
import Quienes from '@/componentes/quienes'
import Contactos from '@/componentes/contactos'

function page() {
  return (
    <div>
      <Headear />
      <Soluciones />
      <Tratamientos />
      <Agenda />
      <Quienes />
      <Contactos />
    </div>
  )
}

export default page
