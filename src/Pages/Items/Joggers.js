import React from 'react'
import Black from '../../images/joggers/Black.jpg'
import Brown from '../../images/joggers/Brown.jpg'
import Green from '../../images/joggers/greencasual.webp'
import GreenPrinted from '../../images/joggers/greenprinted.webp'
import Grey from '../../images/joggers/greyJogger.jpg'
import Jet from '../../images/joggers/jetblack.webp'
import Sky from '../../images/joggers/skyblue.webp'
import White from '../../images/joggers/WhitePrint.jpg'
import ShirtItem from './ShirtItem'
import Navbar from '../../components/Navbar'
const Joggers = () => {
  const ShirtItems = 
  [
  {
    name:"BlackPlain",
    Img:Black
    
  },
  {
    name:"Brown",
    Img:Brown

  },
  {
    name:"GreenCasual",
    Img:Green

  },
  {
    name:"GreenPrinted",
    Img:GreenPrinted

  },
  {
    name:"GreyJogger",
    Img:Grey

  },
   {
    name:"JetBlack",
    Img:Jet
  },
  {
    name:"SkyBlue",
    Img:Sky
  },
  {
    name:"WhitePrinted",
    Img:White
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

export default Joggers