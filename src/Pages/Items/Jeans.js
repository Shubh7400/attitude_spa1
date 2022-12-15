import React from 'react'
import Black from '../../images/jeans/blackheavy.webp'
import Plain from '../../images/jeans/bluejeans.webp'
import Bluejeans from '../../images/jeans/combo.webp'
import Combo from '../../images/jeans/combo2.webp'
import Combo2 from '../../images/jeans/lightblue.webp'
import LightBlue from '../../images/jeans/lightgrey.webp'
import Lightgrey from '../../images/jeans/navyblue.webp'
import NavyBlue from '../../images/jeans/plainblack.webp'
import ShirtItem from './ShirtItem'
import Navbar from '../../components/Navbar'

const Jeans = () => {
  const ShirtItems=
  [
    {
      name:"BlackHeavy",
      Img:Black
    },
    {
      name:"BlueJeans",
      Img:Bluejeans
    },
    {
      name:"Combo+3",
      Img:Combo
    },
    {
      name:"Combo+2",
      Img:Combo2
    },
    {
      name:"LightBlue",
      Img:LightBlue
    },
    
    {
      name:"LightGrey",
      Img:Lightgrey
    },
    {
      name:"Navyblue",
      Img:NavyBlue
    },
    {
      name:"PlainBlack",
      Img:Plain
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

export default Jeans