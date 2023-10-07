import React, { useState } from 'react'
import {BsHouseHeartFill} from 'react-icons/bs'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'

export default function TopBar() {

    const [nav, setNav] = useState(false)

    const handleNav = () => setNav(!nav)

  return (
    <div className='flex h-24 w-full justify-between bg-gray-200 items-center mx-auto px-8 shadow-2xl'>
        <div className='flex h-10 items-end text-2xl'>
            <BsHouseHeartFill size={30} className='mr-1'/>
            <h1 className='mr-1'>Smart</h1>
            <h1 className='text-main-color'>Mind</h1>
        </div>

        <ul className='hidden md:flex'>
            <li className='p-4'>Inicio</li>
            <li className='p-4'>Graficas</li>
            <li className='p-4'>Noticias</li>
            <li className='p-4'>Suscribete</li>
        </ul>

        <div onClick={handleNav} className='block md:hidden'>
            {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
        </div>

        <div className={nav ? 'fixed left-0 top-0 w-[60%] z-[100] h-full bg-gray-300 ease-in-out duration-500' : 'fixed left-[-100%]'}>
            <div className='w-auto flex h-10 items-end text-2xl m-4 '>
                <BsHouseHeartFill size={30} className='mr-2'/>
                <h1 className='mr-2'>Smart</h1>
                <h1 className='text-main-color'>Mind</h1>
            </div>

            <ul className='uppercase p-4'>
                <li className='p-4 border-b border-gray-600'>Inicio</li>
                <li className='p-4 border-b border-gray-600'>Graficas</li>
                <li className='p-4 border-b border-gray-600'>Noticias</li>
                <li className='p-4 border-b border-gray-600'>Suscribete</li>
            </ul>
        </div>
    </div>
  )
}
