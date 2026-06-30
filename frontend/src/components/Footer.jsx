import React from 'react'
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa'

const Footer = () => {
  return (
    <div>
      <div>
        <h2> Need Update on Latest Offer?</h2>
        <p> Subscribe to our News Letter to get uptodate Information</p>
        <div>
          <input type="email" placeholder='Enter Email' />
          <button>Join Now!</button>
        </div>
      </div>
      <div>
        <div>
          <h2>Daniel's Resturant</h2>
          <div>
            <FaFacebook/>
            <FaInstagram/>
            <FaYoutube/>
          </div>
        </div>
        <div>
          <ul>
            <li>Home</li>
            <li>Menu</li>
            <li>About Us</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
      </div>
      <p> 2026 Daniel's Dinner. All Rights Reserved</p>
      
    </div>
  )
}

export default Footer
