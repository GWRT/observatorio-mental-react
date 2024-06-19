import React from 'react'

export default function FrontPage() {
  return (
    <div className='flex flex-col w-full h-screen bg-font-page bg-cover bg-center justify-center items-center'>
      <div className='max-w-[800px] p-5 space-y-5 filter backdrop-blur-[5px]'>
        <h1 className='text-5xl'>10 Octubre - <span><strong>Día Mundial de la salud Mental</strong></span></h1>
        <div className='flex h-1 w-20 bg-main-color'></div>
        <p>Una oportunidad para comprometerse creando entornos y condiciones de vida que propicien una mejor salud mental para todos</p>
      </div>
    </div>
  )
}
