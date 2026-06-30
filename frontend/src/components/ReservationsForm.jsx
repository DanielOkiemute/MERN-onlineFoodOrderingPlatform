import React, { useState } from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaTiktok } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { ImageOff } from '@lucide/vue';
import { backendurl } from '../App';
import {toast} from 'react-toastify'
import axios from 'axios';



const ReservationsForm = () => {

  const [formData,setFormData] = useState({
    name:"",
    email:"",
    phone:"",
    date:"",
    time:"",
    guests:"1"
  })
  const handleChange = (e) =>{
    setFormData({...formData,[e.target.name]:e.target.value})
  }


  const submitReservation = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(backendurl  + '/api/reservations/create',formData)
      if(response.data.success){
        toast.success(response.data.message)
      }else{
        toast.error(response.data.message)
      }
    } catch (error) {
      console.log(error)
      toast.error("Something went wrong")
    }
  }




  const timeSlot = ()=>{
    const slots =[];
    for (let hour = 9 ;hour <21; hour++){
      const startHour = hour % 12 === 0 ? 12 : hour % 12;
      const startPeriod = hour < 12 ? "AM" :"PM";

      const endHour = (hour + 1) % 12 === 0 ? 12 : (hour + 1);
      const endPeriod = (hour + 1) < 12 ? "AM" : "PM";

      slots.push(`${startHour}:00 ${startPeriod} -${endHour}:00 ${endPeriod} `)
    }
    return slots
  }
  return (
    <div className='min-h-screen  p-6 md:p-12'>
      <div className='max-w-6xl mx-auto grid md:grid-cols-3 gap-1'>
        <form onSubmit={submitReservation} className='md:col-span-2 p-8 shadow-md bg2 '>
          <h2 className='text-xl font-semibold text-amber-500  uppercase tracking-wider'>Reserve a table</h2>
          <h1 className='text-3xl font-bold mb-4'>Dine With Us <span className='text-amber-500'> Reserve Now!!!</span></h1>
          <div className='grid md:grid-cols-2 gap-4'>
            <div className='grid gap-1.5'>
              <label htmlFor="name" className='font-bold'>Full Name</label>
              <input type="text" name="name" value={formData.name} onChange={handleChange} id="name" placeholder='Full Name' required className='w-full p-3 text-white border placeholder:text-white bg-blue-400 focus:ring-gray-500 rounded-4xl'/>
            </div>
            <div className='grid gap-1.5'>
              <label htmlFor="email"className='font-bold'>Email</label>
              <input type="email"name="email" value={formData.email} onChange={handleChange} id="email" placeholder='Enter Youe Email' required className='w-full p-3 border placeholder:text-white  text-white bg-blue-400 focus:ring-gray-500 rounded-4xl'/>
            </div>
            <div className='grid gap-1.5'>
              <label htmlFor="email"className='font-bold'>Phone Number</label>
              <input type='tel' name="phone" value={formData.phone} onChange={handleChange}id="phone" placeholder='Enter Phone Number' required className='w-full placeholder:text-white text-white p-3 border bg-blue-400 focus:ring-gray-500 rounded-4xl'/>
            </div>
            <div className='grid gap-1.5'>
              <label htmlFor="date"className='font-bold'>Reservation Date</label>
              <input type="date" name="date" value={formData.date} onChange={handleChange} id="date" className='w-full p-3 border  text-white bg-blue-400 focus:ring-gray-500 rounded-4xl' />
            </div>
            <div className='grid gap-1.5'>
              <label htmlFor=""className='font-bold'>Time For Reservations</label>
              <select name="time" value={formData.time} onChange={handleChange} id="" className='w-full p-3 border  text-white bg-blue-400 focus:ring-gray-500 rounded-4xl'>
                <option value=""> Select Time</option>
                {
                  timeSlot().map((slot,index)=>(
                    <option key={index} value={slot}>
                      {slot}
                    </option>
                  ))
                }
              </select>
            
            </div>
             <div className='grid gap-1.5'>
              <label htmlFor=""className='font-bold text-white'>Number of Gusts</label>
              <select name="guests" value={formData.guests} onChange={handleChange} id="" className='w-full p-3 text-white border bg-blue-400 focus:ring-gray-500 rounded-4xl'>
                {[...Array(10).keys()].map((i)=>(
                  <option key={i + 1} className='text-white' value={i + 1}>{i + 1} Guest(s) </option>
                ))}
              </select>
            </div> 
          </div>
          <button type="submit" className='w-full text-white mt-4 bg-amber-500 hover:bg-amber-600 rounded-4xl transition font-bold'>Submit Reservation Info</button>
        </form>
        <div className='bg2 text-gray-500 shadow-md p-8 space-y-10 text-center rounded-2xl'>
          <div>
            <h3 className='text-3xl font-bold text-white'>Address</h3>
            <p className='text-white'>123 Main Street, City, State 12345</p>
          </div>
          <div>
            <p className='text-white'> Call Us: </p>
            <h3 className='text-3xl font-bold text-white'>(123) 456-7890</h3>
          </div>
          <div>
            <h3 className='text-3xl font-bold text-white'>Open Time</h3>
            <p className='text-white'>Monday - Friday: 9:00 AM - 08:00 PM</p>
            <p className='text-white'>Saturday - Sunday: 10:00 AM - 11:00 PM</p>
          </div>
          <div>
            <h3 className='text-lg font-bold mb-2'> Stay Connected</h3>
            <div className='flex gap-4 justify-center'>
              <FaFacebook  className='text-4xl text-white'/>
              <FaSquareXTwitter className='text-4xl text-white' />
              <FaInstagramSquare className='text-4xl text-white' />
              <IoLogoWhatsapp  className='text-4xl text-white'/>
              <FaTiktok className='text-4xl text-white' />
              <FaYoutube className='text-4xl text-white' />
              
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ReservationsForm
