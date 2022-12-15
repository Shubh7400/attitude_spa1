import React from 'react'
import Navbar from '../../components/Navbar'
import darkyellow from '../../images/shirts/darkyellow.webp'
import bluecheks from '../../images/shirts/bluecheks.webp'
import printed from '../../images/shirts/printed.webp'
import roundblue from '../../images/shirts/roundblue.webp'
import yellow from '../../images/shirts/yellow.jpg'
import Light from '../../images/shirts/white.webp'
import White from '../../images/shirts/LightBlue.webp'
import Whites from '../../images/shirts/bluewhite.webp'

import '../../../src/App.css'
import ShirtItem from './ShirtItem'
import Main from '../../images/shirts/main.webp'
const Shirts = () => {
const ShirtItems=[
  
    {
      name:"darkYellow",
      Img:darkyellow,
      id:1
    },
    {
      name:"BlueChecks",
      Img:bluecheks,
      id:2
    },
    {
      name:"PrintedShirt",
      Img:printed,
      id:3
    },
    {
      name:"RoundPattern",
      Img:roundblue,
     id:4
    },
    {
      name:"YellowPlain",
      Img:yellow,
        id:5
    },
     {
      name:"White",
      Img:Light,
      id:6
    },
    {
      name:"LightBlue",
      Img:White,
      id:7
    },
    {
      name:"blueWhite",
      Img:Whites,
      id:8
    },
  ]
  
    return (
      <>
      <div>
        <Navbar/>
        <img src={Main} alt="item" className="mainimg"></img>
       
        <div className='ShirtItems'>
        {
              ShirtItems.map((item, index)=>{
                  console.log(item, index)
                  return(<>
                
                     <ShirtItem Img={item.Img} id={item.id} name={item.name}/>
                  </>)
              })
          }
         
          </div>
          <div className='ShirtItems'>
        {
              ShirtItems.map((key,value)=>{
                  console.log(key, value)
                  return(<>
                
                     <ShirtItem Img={key.Img} id={key.id} name={key.name}/>
                  </>)
              })
          }
         
          </div>
      </div>
  </>
  )
}

export default Shirts