import React from 'react'
import Batman from '../../images/tshirts/batman.webp'
import Iron from '../../images/tshirts/ironman.webp'
import Marvel from '../../images/tshirts/marvel.webp'
import Jaipuri from '../../images/tshirts/jaipuri.webp'
import Navy from '../../images/tshirts/NavyBlue.webp'
import Sunset from '../../images/tshirts/sunset.webp'
import White from '../../images/tshirts/white.webp'
import World from '../../images/tshirts/world.webp'
import Navbar from '../../components/Navbar'
import ShirtItem from './ShirtItem'
const Tshirts = () => {
  const ShirtItems= 
  [
  
  {
    name:"BatmanPrint",
    Img:Batman,
    id:9,
  },
  {
    name:"IronPrint",
    Img:Iron,
    id:10,
  },
  {
    name:"MarvelTshirt",
    Img:Marvel,
    id:11,

  },
  {
    name:"NavyBlue",
    Img:Navy,
    id:12,

  },
  {
    name:"SunsetWhite",
    Img:Sunset,
    id:13,

  },
   {
    name:"WhiteTshirt",
    Img:White,
    id:14,
  },
  {
    name:"WorldClass",
    Img:World,
    id:15,
  },
  {
    name:"Jaipuri",
    Img:Jaipuri,
    id:16
  },
]

  return (
    <>
    <div>
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
    </div>
     </>

    )
}

export default Tshirts