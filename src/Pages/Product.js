import React from 'react'
import Navbar from '../components/Navbar'
import images2 from '../images/images.png'
import tshirt from '../images/tshirt.webp'
import shirt from '../images/shirt.webp'
import joggers from '../images/joggers_X4OUb1k.webp'
import sweatshirt from '../images/sweatshirt.webp'
import shoes from '../images/shoes_94FSptv.webp'
import jeans from '../images/jeans_zLmbNxi.webp'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
const Product = () => {
  return (
    <>
   
    <Navbar/>
    <div className='contactlogo'>
  <img  src={images2} alt="say"/>
  </div>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-md-3 col-sm-3 col-6 m-4'>
         <img src={shirt} alt="image1"></img>
            <p className='text-center' >
              <Link to="/shirts"className='text-decoration-none text-dark'>Shirts</Link>
            </p>
            </div>
            <div className='col-md-3 col-sm-3 col-6 m-4'>
            <img src={joggers} alt="image2"></img>
            <p className='text-center' >
            <Link to="/joggers"className='text-decoration-none text-dark'>Joggers</Link>
            </p>

            </div>
            <div className='col-md-3 col-sm-3 col-6 m-4'>
           <img src={tshirt} alt="image2"></img>
            <p className='text-center' > 
             <Link to="/Tshirt" className='text-decoration-none text-dark'>Tshirts</Link>
            </p>
            </div>
          </div>
          <div className='row'>
          <div className='col-md-3 col-sm-3 col-6 m-4'>
         <img src={shoes} alt="image2"></img>
            <p className='text-center' >
            <Link to="/shoes" className='text-decoration-none text-dark'>Shoes</Link>
            </p>
            </div>
            <div className='col-md-3 col-sm-3 col-6 m-4'>
            <img src={sweatshirt} alt="image2"></img>
            <p className='text-center' >  
            <Link to="/sweatshirt"className='text-decoration-none text-dark'>SweatShirts</Link>
            </p>
            </div>
            <div className='col-md-3 col-sm-3 col-6 m-4'>
           <img src={jeans} alt="image2"></img>
            <p className='text-center'>
            <Link to="/Jeans"className='text-decoration-none text-dark'>Jeans</Link>
            </p>
            </div>
          </div>
          </div>
          <Footer/>
        
    </>
  )
}

export default Product

