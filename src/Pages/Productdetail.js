import React from 'react'
import {  useParams } from 'react-router-dom'
import darkyellow from '../images/shirts/darkyellow.webp'
import bluecheks from '../images/shirts/bluecheks.webp'
import printed from '../images/shirts/printed.webp'
import roundblue from '../images/shirts/roundblue.webp'
import yellow from '../images/shirts/yellow.jpg'
import Light from '../images/shirts/white.webp'
import White from '../images/shirts/LightBlue.webp'
import Whites from '../images/shirts/bluewhite.webp'
import Batman from '../images/tshirts/batman.webp'
import Iron from '../images/tshirts/ironman.webp'
import Marvel from '../images/tshirts/marvel.webp'
import Jaipuri from '../images/tshirts/jaipuri.webp'
import Navy from '../images/tshirts/NavyBlue.webp'
import Sunset from '../images/tshirts/sunset.webp'
import Whiter from '../images/tshirts/white.webp'
import World from '../images/tshirts/world.webp'
const Productdetail = () => {
  const {id}=useParams();
  console.log(id, "hjdhf");
  const data=[
  
    
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
  const set=[
    {
      name:"BatmanPrint",
      Img:Batman,
      id:9
    },
    {
      name:"IronPrint",
      Img:Iron,
      id:10
    },
    {
      name:"MarvelTshirt",
      Img:Marvel,
      id:11
  
    },
    {
      name:"NavyBlue",
      Img:Navy,
      id:12
  
    },
    {
      name:"SunsetWhite",
      Img:Sunset,
      id:13

    },
     {
      name:"WhiteTshirt",
      Img:Whiter,
      id:14
    },
    {
      name:"WorldClass",
      Img:World,
      id:15
    },
    {
      name:"Jaipuri",
      Img:Jaipuri,
      id:16
    },
  ]
  return (
    <div className="full-detail">
      <div className="explore-container">
        {
          
          data.filter((item) => item.id == id)
            .map((item) => (
              <div className="full-card" key={item.id}>
                <h2>Name: {item.name}</h2>
                <img src={item.Img} alt="images"/>
              </div>
            ))}
            
      </div>
      <div className="explore-container">
        {
          
          set.filter((item) => item.id == id)
            .map((item) => (
              <div className="full-card" key={item.id}>
                <h2>Name: {item.name}</h2>
                <img src={item.Img} alt="images"/>
              </div>
            ))}
            
      </div>
    </div>
)
}

export default Productdetail