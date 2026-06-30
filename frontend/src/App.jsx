import React from 'react'
import Heroe from './components/Heroe'
import Services from './components/Services'
import Menu from './components/Menu'
import ReservationsForm from './components/ReservationsForm'
import Footer from './components/Footer'
import {ToastContainer} from 'react-toastify'


export const backendurl = 'http://localhost:5000'

const App = () => {
  return (
    
    <div className="text-3xl font-bold text-cyan-500 text-center">
      <ToastContainer/>
     <Heroe/>
     <Services/>
     <Menu/>
     <ReservationsForm/>
     <Footer/>
    </div>
  )
}

export default App
