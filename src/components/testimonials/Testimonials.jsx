import React from 'react'
import './testimonials.css'
import img1 from '../../assets/blank101.jpeg'
import img2 from '../../assets/iaeste.jpg'
import img3 from '../../assets/netlab2.jpg'


const data=[
  {
    image:img1,
    name:"Anusha, Blank 101 President",
    review:"His performance has been recorded to be excellent within the club, and he has provided constructive feedback to writers     while proving instrumental in improving their writing. He has good leadership and communication abilities and has proven to be a very diligent team worker." 
  },
  {
    image:img2,
    name:"Dr. Karunakar Kotegar, IAESTE India President",
    review:"Prabhat is poised remarkably well in different stages of his ongoing career. He is always quick on his feet with sensible reactions to problems at hand.When it comes to his work he exhibits a great level of professionalism and is notably passionate about his work. His interpersonal skills, intelligence and analytical powers are supplemented by his diligence."
  },
  {
    image:img3,
    name:"Amay Gada, Network TechLab",
    review:"He is a quick learner, and is extremely hardworking, as well as quite enthusiastic throughout the internship and he has produced great results overall. He was a sincere and amiable intern, who was always ready to take constructive criticism, and strives to become better in all aspects. "
  }
]
const testimonials = () => {
  return (
    <section id="testimonials">
      <h5>
        Review from Co-Workers
      </h5>
      <h2>
        LORs
      </h2>

      <div class="container testimonials__container">
        {
          data.map(({image,name,review})=>{
            return(
              <div class="testimonials__card" >
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