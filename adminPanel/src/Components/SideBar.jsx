import React from 'react'
import {NavLink} from 'react-router-dom'
import {IoIosLogOut,IoMdAddCircleOutline} from 'react-icons/io'
import {MdFormatListBulletedAdd} from 'react-icons/md'


const SideBar = ({setToken}) => {
  return (
    <div className='w-[22%] min-h-screen border-r-2 bg-white border-gray-200 '>
      <div className='mt-4 px-6'>
        <h2 className='text-[32px] font-bold '>Emeral Bistral</h2>
      </div>
      <div className='flex flex-col gap-4 py-6'>
        <NavLink to="/add" className='flex items-center border-b-2 border-gray-200 px-6 py-3  text-gray-800 hover:bg-amber-600 hover:text-white' >
          <IoMdAddCircleOutline className='text-[35px] text-black '/>
          <p className='hidden md:block text-base'>Add Menu</p>

        </NavLink>

        <NavLink  to="/list" className='flex items-center border-b-2 border-gray-200 px-6 py-3  text-gray-800 hover:bg-amber-600 hover:text-white'>
          <MdFormatListBulletedAdd className='text-[35px] text-black '/>
          <p className='hidden md:block text-base'>Menu List</p>
        </NavLink>
        
        <NavLink to="/table" className='flex items-center border-b-2 border-gray-200 px-6 py-3  text-gray-800 hover:bg-amber-600 hover:text-white'>
          <MdFormatListBulletedAdd className='text-[35px] text-black '/>
          <p className='hidden md:block text-base'>Reservations</p>
        </NavLink>

        <button onClick={() => setToken("")} className='flex items-center px-6 py-3 border-b border-gray-200 text-gray-600 hover:bg-amber-600 hover:text-white w-full text-left'>
          <IoIosLogOut className='hidden md:block text-base'/>
          <p  className='hidden md:block text-base'> LogOut</p>
        </button>

      </div>
      
    </div>
  )
}

export default SideBar
