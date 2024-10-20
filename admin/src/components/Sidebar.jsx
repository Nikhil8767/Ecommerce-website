import React from 'react'
import { NavLink } from 'react-router-dom'
import { assets } from '../assets/assets'

const Sidebar = () => {
  return (
    <div className='w-[18%] min-h-screen border-r-2'>
        <div className='flex flex-col gap-4 pt-6 pl-[20%] text-[15px]'>
            <NavLink className={'flex items-center gap-3 border border-gray-500 border-r-0 px-3 py-2 rounded-l'} to="/add">
            <img src={assets.add_icon} alt="" className='w-5 h-5'/>
            <p className='hidden md:block'>Add items</p>
            </NavLink>
            <NavLink className={'flex items-center gap-3 border border-gray-500 border-r-0 px-3 py-2 rounded-l'} to="/list">
            <img src={assets.order_icon} alt="" className='w-5 h-5'/>
            <p className='hidden md:block'>List items</p>
            </NavLink>
            <NavLink className={'flex items-center gap-3 border border-gray-500 border-r-0 px-3 py-2 rounded-l'} to="/order">
            <img src={assets.order_icon} alt="" className='w-5 h-5'/>
            <p className='hidden md:block'>Order items</p>
            </NavLink>
        </div>
    </div>
  )
}

export default Sidebar