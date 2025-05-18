import React from 'react'
import Navbar from '@/app/components/Organismos/Navbar/index'
import CajaComentarios from '@/app/components/Organismos/CajaComentarios/index'
import Vertical from '@/app/components/Organismos/Vertical/index'

const Index = () => {
  return (
    <div >
      <Navbar />
      <div className=' flex justify-start items-start'>
      <Vertical />
      <CajaComentarios />
      </div>
    </div>
  )
}

export default Index
