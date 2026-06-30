import React from 'react'
import img1 from '../assets/breakfast.jpg'
import img2 from '../assets/current.jpg'
import img3 from '../assets/dinner.jpg'
import img4 from '../assets/dessert.jpg'
import img5 from '../assets/img.jpg'


const Services = () => {
  return (
    <div className='flex mt-2 .bg2'>
      
      <div>
        {/* First Service */}
        <div className='w-full m-0.5'>
          <div>
          <img src={img2} alt="Delicious Food" className='mb-2  place-self-center' />
          <p className='text-center mt-3 text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.</p>
          <h2 className='text-green-500 mt-3'>Deicacies</h2>
          </div>
         <div>
          <img src={img4} alt=""className='w-full' />
         </div>
          
        </div>
        
      </div>
      <div>
        {/* Second Service */}
        <div className='w-full m-0.5'>
          <div >
          <img src={img3} alt="Delicious Food" className='mb-2  place-self-center' />
          <p className='text-center mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.</p>
          <h2 className='text-amber-300 mt-3'>BreakFast</h2>
          </div>
         <div>
          <img src={img5} alt=""className='w-full' />
         </div>
          
        </div>
        
      </div>
      <div>
        {/* Third Service */}
        <div className='w-full m-0.5'>

           <div>
          <img src={img5} alt=""className='w-full' />
          <p className='text-center mt-3 text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.</p>
          <h2 className='text-red-500 mt-3'>Desserts</h2>
         </div>
          <div >
          <img src={img3} alt="Delicious Food" className='mb-2  place-self-center' />
          
          </div>
        
          
        </div>
        
      </div>

    </div>
  )
}

export default Services

