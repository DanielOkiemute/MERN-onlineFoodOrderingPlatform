import React from 'react'
import bgImage from '../assets/bg1.jpg'
import lineImage1 from '../assets/line image1.png'
import lineImage2 from '../assets/line image2.png'
import Navbar from './Navbar'


const Heroe = () => {
  return (
    <div className='relative h-screen w-full bg-cover bg-center bg-no-repeat ' style={{ backgroundImage: `url(${bgImage})` }}>
      <Navbar/>
      <div className='relative z-10 flex flex-col items-center justify-center h-full text-white gap-4'>
        <h1 className='text-lg md:text-xl mb-4 tracking-widest uppercase'>Where Delight Meets Tast</h1>
        <h2 className='text-4xl md:text-6xl font-bold mb-6'>Amazing Grace Dinnner</h2>
        <button className='bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-2 px-4 rounded-2xl'>Reserve a Table!</button>
      </div>
      
    </div>
  )
}

export default Heroe
