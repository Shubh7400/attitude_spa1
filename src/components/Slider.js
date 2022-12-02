import React from 'react'
import tiny1 from '../images/tinywow1.webp'
import tiny2 from '../images/tinywow2.webp'
import Group from '../images/single.webp'

function slider() {
  return (
    <>
    
    <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div className="carousel-item active" data-bs-interval="2000">
      <img src={Group} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item" data-bs-interval="2000">
      <img src={tiny1} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item" data-bs-interval="3000">
      <img src={tiny2} className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </>
  )
}

export default slider