import React from 'react'
import CV from '../../assets/CV.pdf'
const cta = () => {
  return (
    <div class='cta'>
        <a href={CV} download class="btn">Download CV</a>
        <a href="#contact" class="btn btn-primary">Contact Me</a>
    </div>
  )
}

export default cta