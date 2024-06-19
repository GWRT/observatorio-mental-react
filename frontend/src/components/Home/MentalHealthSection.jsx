import React from 'react'
import {AiOutlineGift} from 'react-icons/ai'
import ReactPlayer from 'react-player'

export default function MentalHealthSection() {
  return (
    <div className='flex w-full justify-center'>
        <div className='flex flex-col max-w-4xl m-10'>
          <h1 className='text-center text-5xl mb-5'>Salud Mental</h1>
          <div className='flex items-center justify-start space-x-9'>
            <AiOutlineGift size={30}/>
            <h1 className='text-3xl'>¿Qué es?</h1>
          </div>
          <div className='flex h-1 w-[150px] bg-main-color ml-[70px] my-5'></div>
          <div className='ml-[70px]'>
            <p>
                Mucha gente, cuando escucha el término de salud mental, piensa en enfermedad mental. Pero la salud mental es mucho más que la ausencia de emfermedad mental. Tiene relación con la vida cotidiana de todos nosotros, con el modo con que cada uno se lleva con sus familias, en el colegio, en el trabajo, en el juego, con sus pares, en su barrio, en la comunidad.
            </p>
            <p>
                La salud mental es algo que todos deseamos para nostros mismos, ya sea que lo sepamos por su nombre o no. Cuando hablamos de la felicidad, de la tranquilidad de espíritu, de la capacidad de goce o satisfacción, estamos usualmente hablando de la salud mental
            </p>
          </div>
          <div className='flex justify-center items-center my-14'>
            <div className='w-full max-w-screen-md'>
              <ReactPlayer url='https://www.youtube.com/watch?v=69gRZSpkqnE' controls width='100%' height='400px'/>
            </div>
          </div>
        </div>
    </div>
  )
}
