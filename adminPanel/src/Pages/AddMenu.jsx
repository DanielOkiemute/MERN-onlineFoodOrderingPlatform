import React, { useState } from 'react'
import upload_image from '../assets/image1.jpg'
import { backendurl } from '../App'
import { toast } from 'react-toastify'
import axios from 'axios'

const AddMenu = ({token}) => {
  const [image,setImage] = useState(null)
  const [name,setName] = useState("")
  const [description,setDescription]= useState("")
  const [category,setCategory] = useState("All")
  const [price,setPrice] = useState("")


  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData()
      formData.append("name",name)
      formData.append("description",description)
      formData.append("category",category)
      formData.append("price",price)
     if (image) {
      formData.append("image",image)
     } 
     const response = await axios.post(`${backendurl}/api/product/add`,formData,{headers:{token}})
     if (response.data.success) {
      toast.success(response.data.message)
      setCategory("")
      setDescription("")
      setImage(null)
      setName("")
      setPrice("")
      
     } else {
      toast.error(response.data.message)
     }
    } catch (error) {
      console.log(error.message)
      toast.error(error.meesage)
    }
    
  }

  return (
    <div>
       <form onSubmit={onSubmitHandler} className='flex flex-col items-start gap-1'>
        <div>
          <p>upload Image</p>
          <div>
            <label htmlFor="image">
              <img  src={!image ? upload_image : URL.createObjectURL(image)} alt="" className='w-34  cursor-pointer' />
              <input onChange={(e)=>setImage(e.target.files[0])}  type="file"  id="image" hidden  />
            </label>
          </div>
        </div>
       
        <div className='w-full'>
          <p className='mb-2 text-[22px] '>Product Name</p>
          <input className='w-full border border-gray-300 max-w-125 rounded' value={name} onChange={(e)=>setName(e.target.value)} type="text" placeholder='Enter Product Name' required/>
        </div>
        <div className='w-full'>
          <p className='mb-2 text-[22px] '>Product Description</p>
          <input className='w-full border border-gray-300 max-w-125 rounded' value={description} onChange={(e)=>setDescription(e.target.value)} type="text" placeholder='Enter Product Description' required/>
        </div>
        <div className='flex gap-2.5'>
          <div className='flex flex-wrap gap-4 w-full'> 
          <p className='mb-2 text-[22px] '>Product Category</p>
          <select value={category} onChange={(e)=>setCategory(e.target.value)} className='w-full max-w-125 border border-gray-500 rounded text-[16px] '>
            <option value="All">All</option>
            <option value="Rice">Rice</option>
            <option value="Spaghetti">Rice</option>
            <option value="Pizza">Pizza</option>
            <option value="Noodles">Noodles</option>
            <option value="Chicken">Chicken</option>
            <option value="Drinks">Drinks</option>
          </select>
          
        </div>
        <div className=' gap-1.5'>
          <p className='mb-2 text-[20px] '>Product Price</p>
          <input value={price} onChange={(e)=>setPrice(e.target.value)} type="number" placeholder='40' className='w-full max-w-30  border border-gray-300 p-0.5 rounded ml-2' />
        </div>
        </div>
         <button type="submit" className='mt-6 px-20 py-3 bg-amber-900 rounded hover:opacity-90 text-white hover:bg-amber-700'>Add Menu</button>
       </form>
    </div>
  )
}

export default AddMenu
