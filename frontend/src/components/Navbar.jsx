import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between p-8 text-white'>
      <div>
        <h1 className='font-bold text-2xl'>Amazing Grace Restaurant</h1>

      </div>
      <div className='flex justify-between gap-8 '>
         <li className='font-bold text-lg cursor-pointer list-none'>HOME</li>
         <li className='font-bold text-lg cursor-pointer list-none'>RESERVATIONS</li>
         <li className='font-bold text-lg cursor-pointer list-none'>MENU</li>
         <li className='font-bold text-lg cursor-pointer list-none'>CONTACT</li>
      </div>
    </div>
  )
}

export default Navbar
