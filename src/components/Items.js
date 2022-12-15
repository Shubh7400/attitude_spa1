import { Link } from "react-router-dom"




const Items = (props) => {
  return (
    <>
    <div className="ItemsWrapper">
        <img src={props.Imgsrc} alt="" className='itemImage'/>
        <div className="title" >{props.name}</div>
        <Link to="details" className="product details"></Link>
        <button className="btn btn-success" >
        <Link to="details" className="text-decoration-none  text-dark">Product Details</Link>
        </button>

              </div>

  </>
  )
}

export default Items