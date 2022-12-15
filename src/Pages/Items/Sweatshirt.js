import React from 'react'
import Navbar from '../../components/Navbar'
import ShirtItem from './ShirtItem'
import Awesome from '../../images/sweatshirt/awesomeSweatshirt.webp'
import Bike from '../../images/sweatshirt/Bikegrey.webp'
import BPuma from '../../images/sweatshirt/blackpuma.webp'
import BlackWhite from '../../images/sweatshirt/blackwhite.webp'
import Ketch from '../../images/sweatshirt/BlueKetch.webp'
import Weirdo from '../../images/sweatshirt/Navyvierdo.webp'
import Pumab from '../../images/sweatshirt/Pumablue.webp'
import Sweat from '../../images/sweatshirt/sweatskitz.webp'
const Sweatshirt = () => {
  const ShirtItems=[
    {
      name:"AwesomeSweatshirt",
      Img:Awesome
      
    },
   
    {
      name:"BlackPuma",
      Img:BPuma
    
    },
    {
      name:"NavyWeirdo",
      Img:Weirdo
    
    },
    {
      name:"PumaBlue",
      Img:Pumab
    
    },
    {
      name:"BikeGrey",
      Img:Bike
    
    },
    
    {
      name:"SweatSkitz",
      Img:Sweat
    
    },
    {
      name:"BlackWhite",
      Img:BlackWhite
    
    },
    {
      name:"BlueKetch",
      Img:Ketch
    
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

export default Sweatshirt