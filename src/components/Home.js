import React from 'react'
import Navbar from './Navbar'
import Slider from './Slider'
import Footer from './Footer'
import tshirt from '../images/tshirt.webp'
import shirt from '../images/shirt.webp'
import joggers from '../images/joggers_X4OUb1k.webp'
import sweatshirt from '../images/sweatshirt.webp'
import shoes from '../images/shoes_94FSptv.webp'
import jeans from '../images/jeans_zLmbNxi.webp'

import Items from './Items'

const Home = () => {

const data=[
  {
    name:"T-shirts",
    Imgsrc:tshirt,
  },
  {
    name:"Shirt",
    Imgsrc:shirt

  },
  {
    name:"Joggers",
    Imgsrc:joggers

  },
  {
    name:"Sweatshirt",
    Imgsrc:sweatshirt

  },
  {
    name:"Shoes",
    Imgsrc:shoes

  },
  {
    name:"Jeans",
    Imgsrc:jeans

  }

]
  return (
    <div>
      <Navbar/>
      <Slider/>
      <div className='itemsParent'>
      {
            data.map((item, index)=>{
                console.log(item, index)
                return(<>
              
                  <Items Imgsrc={item.Imgsrc} name={item.name}/>


                </>)
            })
        }
        </div>
      <Footer/>
    </div>
  )
}

export default Home
