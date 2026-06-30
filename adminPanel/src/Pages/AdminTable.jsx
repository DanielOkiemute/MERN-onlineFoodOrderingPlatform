import React, { useEffect, useState } from 'react'
import { backendurl } from '../App'
import { MdDeleteForever } from 'react-icons/md'
import axios from 'axios'
import { toast } from 'react-toastify'

const AdminTable = () => {

 const handleDeleteFunction = async (id) => {
  try {
    const response = await axios.delete(`${backendurl}/api/reservations/delete/${id}`)
    toast.success(response.data.message)
    fetchReservations()
  } catch (error) {
    console.log("Error deleting Reservations")
    toast.error(error.message)
  }
  
 }


  const [reservations,setReservations] = useState([])

  console.log("First")

   const fetchReservations = async () => {

        console.log("Fetching Reservations")
      try {
        const response = await axios.get(backendurl +'/api/reservations/get')
        setReservations(response.data.reservations)
        console.log(response.data.reservations)
        localStorage.setItem('reservations',(response.data.reservations))
      } catch (error) {
        console.log(error)
        toast.error()
      }
      
    }

  
  useEffect(()=>{
   
    fetchReservations()

  },[])
  return (
    <div className='min-h-screen'>
      <h2 className='text-3xl font-bold text-center text-gray-300 mb-6'>Restaurants Reservations</h2>
      <div className='overflow-x-auto'>
        <table className='w-full shadow-lg rounded-xl'>
          <thead>
            <tr className='bg-amber-600 text-left'>
              <th className='p-3'>Name</th>
              <th className='p-3'>Email</th>
              <th className='p-3'>Phone</th>
              <th className='p-3'>Date</th>
              <th className='p-3'>Time</th>
              <th className='p-3'>Guests</th>
              <th className='p-3'>Delete</th>
            </tr>
          </thead>
          <tbody>
            {
              reservations.length === 0 ? (
                <tr>
                  <td colSpan={7} className='p-4 text-center'> No Reservations Currently</td>
                </tr>
              ) : (
                reservations.map((reservation,index)=>(
                    <tr key={index} className='border-b border-gray-400 hover:bg-gray-100'>
                    <td className='p-3'> {reservation.name} </td>
                    <td className='p-3'>{reservation.email} </td>
                    <td className='p-3'>{reservation.phone} </td>
                    <td className='p-3'>{reservation.date} </td>
                    <td className='p-3'>{reservation.time} </td>
                    <td className='p-3'>{reservation.guests} </td>
                    <td onClick={()=> handleDeleteFunction(reservation._id)} className='bg-red-600 text-white px-3 py-1 rounded hover:bg-red-800'><MdDeleteForever />  </td>
                    
                  </tr>

                ))
              )
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default AdminTable

