import React from 'react'
import './Contact.css'
import Navbar from '../components/Navbar'
import images2 from '../images/images.png'
const Contact = () => {
  return (
  <>
  <Navbar/>
  <div className='contactlogo'>
  <img  src={images2} alt="say"/>
  </div>
  <div class="container">
    <div class="content">
      <div class="left-side">
        <div class="address details">
          <i class="fas fa-map-marker-alt"></i>
          <div class="topic">Address</div>
          <div class="text-one">216/, VijayShree Nagar</div>
          <div class="text-two">Indore (M.P)</div>
        </div>
        <div class="phone details">
          <i class="fas fa-phone-alt"></i>
          <div class="topic">Phone</div>
          <div class="text-one">+9174 0080 4343</div>
          <div class="text-two">+9183 0517 2578</div>
        </div>
        <div class="email details">
          <i class="fas fa-envelope"></i>
          <div class="topic">Email</div>
          <div class="text-one">Shubhamsolanki29112000@gmail.com</div>
          <div class="text-two">shubhamsolanki740080@gmail.com</div>
        </div>
      </div>
      <div class="right-side">
        <div class="topic-text">Send us a message</div>
        <p>If you have any work from me or any types of quries , you can send me message from here. It's my pleasure to help you.</p>
      <form action="#">
        <div class="input-box">
          <input type="text" placeholder="Enter your name"/>
        </div>
        <div class="input-box">
          <input type="text" placeholder="Enter your email"/>
        </div>
        <div class="input-box message-box">
          
        </div>
        <div class="button">
          <input type="button" value="Send Now" />
        </div>
      </form>
    </div>
    </div>
  </div>
</>
  )
}

export default Contact;
