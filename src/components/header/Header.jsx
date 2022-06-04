import React from 'react'
import './header.css'
import CTA from './cta'
import ME from "../../assets/portfolio.png"
import HeaderSocials from './headersocials'
const header = () => {
  return (
    <header>
      <div class="container header__container">
        <h3>Hello I'm</h3>
        <h1>Prabhat Namdharani</h1>
        <h5 class="text-light">Software Engineer</h5>
        <CTA />
        <HeaderSocials />

        <div class="me">
          <img src={ME} alt="" />
        </div>
        <a href="#contact" class='scroll_down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default header