import React from 'react';
import image1 from '../UI/images/accounting.jpeg';
import image2 from '../UI/images/clearing.jpg';
import image3 from '../UI/images/fork.jpg';
import image4 from '../UI/images/lorry.jpg';
import image5 from '../UI/images/warehouse.jpg';
import { Link } from "react-router-dom";


function Carousel() {
  return (
   
    <div id="carouselMaterialStyle" class="carousel slide carousel-fade" data-mdb-ride="carousel">
   
    <div class="carousel-indicators">
      <button type="button" data-mdb-target="#carouselMaterialStyle" data-mdb-slide-to="0" class="active" aria-current="true"
        aria-label="Slide 1"></button>
      <button type="button" data-mdb-target="#carouselMaterialStyle" data-mdb-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-mdb-target="#carouselMaterialStyle" data-mdb-slide-to="2" aria-label="Slide 3"></button>
    </div>
  
  
    <div class="carousel-inner rounded-5 shadow-4-strong">
  
  
      <div class="carousel-item active">
        <img src={image2} class="d-block w-100"
          alt="Sunset Over the City" />
        <div class="carousel-caption d-none d-md-block">
          <h2>Clearing and forwarding</h2>
          <p>We do clearing and fowarding</p>
        </div>
      </div>
  
  
      <div class="carousel-item">
        <img src={image3} class="d-block w-100"
          alt="Canyon at Nigh" />
        <div class="carousel-caption d-none d-md-block">
          <h2>Warehousing</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
  
  
      <div class="carousel-item">
        <img src={image4} class="d-block w-100"
          alt="Cliff Above a Stormy Sea" />
        <div class="carousel-caption d-none d-md-block">
          <h2>Distribution</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        </div>
      </div>
    </div>

    
  
  
  
  </div>
    
  )
}

export default Carousel


// <div class="mapouter"><div class="gmap_canvas"><iframe width="600" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=next%20gen%20mombasa%20road&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://123movies-to.org"></a><br><style>.mapouter{position:relative;text-align:right;height:500px;width:600px;}</style><a href="https://www.embedgooglemap.net">how to add google maps to a website</a><style>.gmap_canvas {overflow:hidden;background:none!important;height:500px;width:600px;}</style></div></div>


{/* <div id="carouselMaterialStyle" class="carousel slide carousel-fade" data-mdb-ride="carousel">
  <!-- Indicators -->
  <div class="carousel-indicators">
    <button type="button" data-mdb-target="#carouselMaterialStyle" data-mdb-slide-to="0" class="active" aria-current="true"
      aria-label="Slide 1"></button>
    <button type="button" data-mdb-target="#carouselMaterialStyle" data-mdb-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-mdb-target="#carouselMaterialStyle" data-mdb-slide-to="2" aria-label="Slide 3"></button>
  </div>


  <div class="carousel-inner rounded-5 shadow-4-strong">
    <!-- Single item -->
    <div class="carousel-item active">
      <img src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(15).webp" class="d-block w-100"
        alt="Sunset Over the City" />
      <div class="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </div>
    </div>


    <div class="carousel-item">
      <img src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(22).webp" class="d-block w-100"
        alt="Canyon at Nigh" />
      <div class="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </div>


    <div class="carousel-item">
      <img src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(23).webp" class="d-block w-100"
        alt="Cliff Above a Stormy Sea" />
      <div class="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </div>
    </div>
  </div>


  <button class="carousel-control-prev" type="button" data-mdb-target="#carouselMaterialStyle" data-mdb-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-mdb-target="#carouselMaterialStyle" data-mdb-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div> */}
