import React from 'react'
import './testimonials.css'
import img1 from '../../assets/img1.jpg'
import img2 from '../../assets/img2.jpeg'
import img3 from '../../assets/img3.jpeg'

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/a11y';

const data=[
  {
    image:img1,
    name:"John Doe",
    review:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." 
  },
  {
    image:img2,
    name:"John Doe",
    review:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
  },
  {
    image:img3,
    name:"John Doe",
    review:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
  }
]
const testimonials = () => {
  return (
    <section id="testimonials">
      <h5>
        Review from Co-Workers
      </h5>
      <h2>
        Testimonials
      </h2>

      <div class="container testimonials__container">
        {
          data.map(({image,name,review})=>{
            return(
              <div class="testimonials__card">
                <div class="testimonials__card-image">
                <img src={image} alt=""/>
                </div>
                <div class="testimonials__card-content">
                <h3>{name}</h3>
                <p>{review}</p>
                </div>
              </div>
            )
          })
        }
      </div>
    </section>
  )
}

export default testimonials