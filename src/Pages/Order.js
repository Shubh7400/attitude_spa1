import React from 'react'
import Navbar from '../components/Navbar'
import images2 from '../images/images.png'
import './Order.css'
const Order = () => {
  return (
    <>
   
    <Navbar/>
    <div className='contactlogo'>
  <img  src={images2} alt="say"/>
  </div>
    <div>Order Now</div>
    </>
  )
}

export default Order