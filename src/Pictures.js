import React from 'react'
import tshirt from './images/tshirt.webp'
import shirt from './images/shirt.webp'
import joggers from './images/joggers_X4OUb1k.webp'
import sweatshirt from './images/sweatshirt.webp'
import shoes from './images/shoes_94FSptv.webp'
import jeans from './images/jeans_zLmbNxi.webp'
import cash from './images/cash.69be4d72e9e3.svg'
import del from './images/del.svg'
import days from './images/15days.38b7d1563ea9.png'

function Pictures() {
  return (
    <>
  <div className="container-fluid ">
    <div className="row mt-1">
      <div className="col-md-2 col-sm-3 col-6 text-center ">
        <img src={tshirt} className="img-fluid" alt="" />
          <a className="three" href="/"><p>T-shirts</p></a>
      </div>
      <div className="col-md-2 col-sm-3 col-6 text-center">
        <img src={shirt} className="img-fluid" alt=""/>
          <a className="three" href="/"><p>Shirts</p></a>
      </div>
      <div className="col-md-2 col-sm-3 col-6 text-center">
        <img src={joggers} className="img-fluid" alt="" />
        <a className="three" href="/"><p>Joggers</p></a></div>
      <div className="col-md-2 col-sm-3 col-6 text-center">
        <img src={sweatshirt} className="img-fluid" alt="" />
        <a className="three" href="/"><p>Sweatshirt</p></a></div>
      <div className="col-md-2 col-sm-3 col-6 text-center">
        <img src={shoes} className="img-fluid" alt="" />
        <a className="three" href="/"><p>Shoes</p></a></div>
      <div className="col-md-2 col-sm-3 col-6 text-center">
        <img src={jeans} className="img-fluid" alt="" />
        <a className="three" href="/"><p>Jeans</p></a></div>
    </div>
  </div>
  <div className="container-fluid">
    <div className="container">
      <div className="row">
        <div className="col-md-4 col-sm-4 col-6 mt-4 text-center">
          <img className='four' src={cash} alt="upi"/>Cash on Delivery
        </div>
        <div className="col-md-4 col-sm-4 col-6 mt-4 text-center">
          <img className='four' src={del} alt="upi"/>Free Delivery
        </div>
        <div className="col-md-4 col-sm-4 col-6 mt-4 text-center">
          <img className='four' src={days} alt="upi"/>Easy Exchange
        </div>
      </div>
    </div>
    <hr />
  </div>
  </>
  )
}

export default Pictures
