import React from 'react'
import './footer.css'
import {BsFacebook} from "react-icons/bs"
import {BsTwitter} from "react-icons/bs"
import {BsInstagram} from "react-icons/bs"
import {BsLinkedin} from "react-icons/bs"

const footer = () => {
  return (
    <footer class="footer__container">
      <a href="#" className='footer__logo'>REACT</a>
      <ul class="permalinks">
        <li><a href="#">Home</a> </li>
        <li><a href="#about">About</a> </li>
        <li><a href="#experience">Experience</a> </li>
        <li><a href="#Services">Services</a> </li>
        <li><a href="#Projects">Projects</a> </li>
        <li><a href="#contact">Contact</a> </li>
        <li><a href="#testimonials">Testimonials</a></li>
      </ul>

      <div class="footer__socials">
        <a href="https://instagram.com/" class="footer__social-link"><BsFacebook /></a>
        <a href="https://twitter.com" class="footer__social-link"><BsTwitter /></a>
        <a href="https://facebook.com" class="footer__social-link"><BsInstagram /></a>
        <a href="https://linkedin.com" class="footer__social-link"><BsLinkedin /></a>
      </div>

      <div class="footer__copyright">
        <small>&copy;Prabhat Namdharani. All rights reserved</small>
      </div>
    </footer>
  )
}

export default footer