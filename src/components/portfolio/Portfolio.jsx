import React from 'react'
import './portfolio.css'
import Titanic from '../../assets/titanic.jpg'
import OpenCV from '../../assets/opencv.jpg'
import Figma from '../../assets/figma.png'
const data=[
  {
    id:1,
    image:Titanic,
    title:"Titanic",
    description:"An ML model that predicts the survival of passengers on the Titanic using logistic regression.",
    link:"https://github.com/Prabhat-codes/Machine-Learning/tree/main/Titanic"
  },
  {
    id:2,
    image:OpenCV,
    title:"OpenCV",
    description:"Using OpenCV to detect faces and squares around them",
    link:"https://github.com/Prabhat-codes/OpenCV_Basics"
  },
  {
    id:3,
    image: Figma,
    title:"Figma",
    description:"A front-end for a website that was developed for foodies by using the Figma app.",
    link:"https://www.figma.com/file/fLuiv6y2Dl2lVcj9IGyquC/Recipe-Master-(Copy)?node-id=0%3A1"
  }
]
const portfolio = () => {
  return (
    <section id="portfolio">
      <h5>Portfolio</h5>
      <h2>Projects I've worked on</h2>
      <div class="container portfolio__container">
        {
          data.map(({id,image,title,description,link})=>{
            return (
              <article class="portfolio__card">
                <div class="portfolio__card-image">
                  <img src={image} alt={title} />
                </div>
                <a href={link} class="btn">{title}</a>
                <h4>{description}</h4>
              </article>
            )
          })
        }
        
      </div>

    </section>
  )
}

export default portfolio