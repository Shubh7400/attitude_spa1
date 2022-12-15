import React from 'react'
import ShirtItem from './ShirtItem'
import BlackPuma from '../../images/shoes/BlackPuma.webp'
import Casual from '../../images/shoes/Casual.webp'
import Mustard from '../../images/shoes/blackmustard.webp'
import Heavy from '../../images/shoes/HeavySneaker.webp'
import RedWhite from '../../images/shoes/Redwhite.webp'
import Rapid from '../../images/shoes/Rapidbox.webp'
import Fashion from '../../images/shoes/Fashion.webp'
import Original from '../../images/shoes/orginalshadow.webp'
import Navbar from '../../components/Navbar'
const Shoes = () => {
  const ShirtItems=
  [
    {
      name:"BlackMustard",
      Img:Mustard
    },
    {
      name:"BlackPuma",
      Img:BlackPuma
    },
    {
      name:"CasualShoes",
      Img:Casual
    },
    {
      name:"FashionSport",
      Img:Fashion
    },
    {
      name:"RedWhite",
      Img:RedWhite
    },
    
    {
      name:"OriginalShadow",
      Img:Original
    },
    {
      name:"HeavyWeight",
      Img:Heavy
    },
    {
      name:"RapidBox",
      Img:Rapid
    },
  
  ]
  return (
    <>
    <Navbar/>
      
      <div className='ShirtItems'>
      {
            ShirtItems.map((item, index)=>{
                console.log(item, index)
                return(<>
              
                   <ShirtItem Img={item.Img} name={item.name}/>
                </>)
            })
        }
       
        </div>
    
    </>
  )
}

export default Shoes