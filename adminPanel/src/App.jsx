import React, { useEffect, useState } from 'react'
import Login from './Components/Login'
import SideBar from './Components/SideBar'
import {ToastContainer} from 'react-toastify'
import AddMenu from './Pages/AddMenu'
import AdminTable from './Pages/AdminTable'
import ListMenu from './Pages/ListMenu'
import { Routes,Route } from 'react-router-dom'


export const backendurl = 'http://localhost:5000'

const App = () => {
  const [token,setToken] = useState(localStorage.getItem("token" || ""))

   useEffect(()=> {
    localStorage.setItem('token',token)
   },[token])

  
   
  return (
    <div className='bg-white min-h-screen'>
      <ToastContainer/>

     {
      !token ? ( <Login setToken={setToken}/>):(
        <>
        <div className='flex w-full'> 
          <SideBar setToken={setToken} />
          <div className='w-[70%] ml-[max(5vw,25px)] my-8 text-black text-base '>
            <Routes> 
            <Route path='/add' element={ <AddMenu token={token}/>} /> 
            <Route path='/list' element={ <ListMenu token={token}/>} /> 
            <Route path='/table' element={ <AdminTable token={token}/>} /> 
          </Routes>
          </div>
        </div>
        </>
      )
     }

    
    
    </div>
  )
}

export default App
