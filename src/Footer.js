import React from 'react'
import master from './images/master-card.58ca01cb40e9.svg'
import upi from './images/upi.svg'
import phonepe from './images/phonepe.10e3b159326b.svg'
import zest from './images/zest.png'
import net from './images/net-banking.30382dea75a6.svg'
import facebook from './images/facebook.svg'
import twitter from './images/twitter.svg'
import instagram from './images/instagram.svg'
import youtube from './images/youtube.svg'
function Footer() {
  return (
<>
<div className="container">
        <div className="row">
          <div className="col-md-3 col-sm-3 col-6 ">
            <b>Orders Queries</b>
            <p>Track orders</p>
            <p>Shipping & Handling</p>
            <p>Cancellation</p>
            <p>Return & Refund Policy</p>
            <br />
            <b>PAYMENT METHODS</b><br />
            <a href="/"><img className='six' src={master} alt="upi"/></a>
             <a href="/" ><img className='six' src={upi} alt="upi"/></a>
            <a href="/"><img className='seven' src={phonepe} alt="upi"/></a><br/>
            <a href="/"><img className='seven' src={zest} alt="upi"/></a>
            <a href="/"><img className='seven' src={net} alt="upi" /></a>
          </div>
          <div className="col-md-3 col-sm-3 col-6">
            <b>Useful Links</b>
            <p>Contact us</p>
            <p>Faqs</p>
            <p>Payment</p>
            <p>Terms & Condition</p>
            <p>Grievance Officer</p>
            <p>Anti Corruption Policy</p>
            <p>USPL World Blogs</p>
            <p>Internal Guidelines For Engaging TPIs</p>
          </div>
          <div className="col-md-3 col-sm-3 col-6">
            <h6>FIND OUR STORE ABOUT Us</h6>
            <hr />
            <p>Match Up Game T&C</p>
            <p>Buy 2 Get 3 Offer T&C</p>
            <p>HDFC Offer T&C</p>
            <p>Buy 2 Get 10% Offer T&C</p>
            <p>Buy 2 At 1799 Collection T&C</p>
            <p>Connect with us</p>
           <a href='/'><img className='seven' src={facebook} alt="upi"/></a>
             <a href="/"> <img className='seven' src={twitter} alt="upi"/></a>
            <a href="/"><img className='seven' src={instagram} alt="upi"/></a><br/>
           <a href="/"> <img className='seven' src={youtube} alt="upi"/></a>
          </div>
          <div className="col-md-3 col-sm-3 col-6">
          
            <form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">{<h5>TRACK ORDER</h5>}</label>
    <input type="text" class="form-control" placeholder='ORDER ID' id="exampleInputEmail1"/>
  </div>
  <button type="submit" class="btn bg-dark text-white btn-lg text-center">Track ORDER</button>
</form>
            </div>
        </div>
      </div>

      <div className='container'>
            <hr/>
            <div className='row'>
              <div className='col-md-3 col-sm-3 col-6'>
            <p>Privacy Policy</p>
            </div>
            <div className='col-md-3 col-sm-3 col-4'>
            <p>Terms&conditions</p>
            </div>
            <div className='col-md-3 col-sm-3 col-6'>
            <p>Cookie Policy</p>
            </div>
            <div className='col-md-3 col-sm-3 col-6'>
            <p>Contact us</p>
            
            </div>
            </div>
           </div>
        
</>
  )
}

export default Footer;