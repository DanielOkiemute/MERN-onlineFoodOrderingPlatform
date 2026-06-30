import React, { useEffect, useState } from 'react'
import { backendurl } from '../App'
import axios from 'axios'
import { toast } from 'react-toastify'
import { MdDeleteForever } from 'react-icons/md'

const ListMenu = ({token}) => {
  const [list,setList] = useState([])

   const fetchList = async () => {
    try {
      const response = await axios.get(backendurl+'/api/product/list',{headers:{token}})
      if (response.data.success) {
        setList(response.data.products) 
      }else{
        toast.error(response.data.message)
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }


  useEffect(()=>{
    fetchList()
  },[])

  return (
    <div>
     <p className='mb-2 text-2xl font-bold'>Menu List</p>
     <div className='flex flex-col gap-2'>
      <div className='grid grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center border-b-2 p-2 border-gray-300 text-lg font-semibold'>
        <b>Image</b>
        <b>Name</b>
        <b>Catgory</b>
        <b>Price</b>
        <b className='text-center'>Action</b>
      </div>
       
       {
        list.map((item,index)=>
        
        <div key={index}className='grid grid-cols-[1fr_3fr_1fr_1fr_1fr]  items-center border-b-2 p-2 border-gray-300 text-lg' >
          <img src={item.image} alt="" className='w-12.5 h-auto  '/>
          <p>{item.name} </p>
          <p>{item.category} </p>
          <p>{item.price} </p>
          <MdDeleteForever className='ml-2 text-[28px] cursor-pointer text-red-700 '/>


        </div>
        )
       }
     </div>
    </div>
  )
}

export default ListMenu
