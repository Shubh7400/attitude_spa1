import React from 'react'
import images1 from './images/images.png'

function Navbar() {
  return (
    
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
    <div className="container-fluid">
      <a className="navbar-brand" href="/">
   <img className='one' src={images1} alt="say"/>
      </a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="mynavbar">
        <ul className="navbar-nav me-auto">
          <li className="nav-item">
            <a className="nav-link" href="/">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">Contact us</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">Help</a>
          </li>
        </ul>
        <form className="d-flex">
          <input className="form-control me-2" type="text" placeholder="Search" />
          <button className="btn btn-dark text-white" type="button">Search</button>
        </form>
      </div>
    </div>
  </nav>
  )
}

export default Navbar