import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
const ShirtItem = (props) => {
    const[count,setcount]=useState(0)
   function handleClick () {
          setcount(count+1) 
          
    }
  return (

    <div className="ShirtItem">
        <img src={props.Img} alt="" className='Shirtimage'/>
        <div >
         <Link to={`/Productdetail${props.id}`} className="shirtname" >{props.name}</Link>
        </div>
        <Link to="shirtdetails" className="product details"></Link>
        <button onClick={handleClick} className="btn btn-success m-5">Add Item{count}</button>
        </div>
  
  )
}

export default ShirtItem