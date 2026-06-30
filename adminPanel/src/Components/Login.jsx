import React, { useState } from 'react'
import { backendurl } from '../App';
import { toast } from 'react-toastify';
import axios from 'axios';

const Login = ({setToken}) => {

  const [email,setEmail] =useState('');
  const [password,setPassword]=useState('')

  const onSubmitHandler = async (e) => {
    try {
      e.preventDefault()
      const response = await axios.post(backendurl+'/api/user/admin',{email,password})
      if (response.data.success) {
        console.log(response)
        console.log("token",response.data.data)
        setToken(response.data.data)
      }else{
        toast.error("Incorrect Credentials")
      }
    } catch (error) {
      console.log(error)
      toast.error("An error occurred")
    }
    
  }
  return (
    <div>
      <div className='flex justify-center items-center min-h-screen bg-gray-200'>
        <div className='bg-white shadow-md rounded-2xl  px-8 py-6 w-full max-w-md'>
            <h1 className='text-2xl font-bold text-center text-gray-800 mb-4'>Admin Login</h1>
            <form onSubmit={onSubmitHandler}>
                <div className='mb-4'>
                    <p className='text-sm font-semibold text-gray-600 mb-2 hover:text-gray-950'>Email Address</p>
                    <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Enter Email' required className='w-[95%] px-3 py-2 border border-gray-400 rounded-md  focus:outline-none focus:border-gray-900' />
                </div>
                <div className='mb-4'>
                    <p className='text-sm font-semibold text-gray-600  hover:text-gray-950 mb-2'>Password</p>
                    <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='Enter password' required className='w-[95%] px-3 py-2 border border-gray-400 rounded-md  focus:outline-none focus:border-gray-900'/>
                </div>
                <button type="submit" className='text-1xl bg-cyan-700 font-bold rounded-md w-full'>Login</button>
            </form>
        </div>
      </div>
    </div>
  )
}

export default Login
