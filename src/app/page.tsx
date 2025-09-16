import React from 'react'
import Headear from '@/componentes/header'
import Soluciones from '@/componentes/soluciones'
import Tratamientos from '@/componentes/tratamientos'
import Agenda from '@/componentes/agenda'

function page() {
  return (
    <div>
      <Headear />
      <Soluciones />
      <Tratamientos />
      <Agenda />
    </div>
  )
}

export default page
