import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
const headersocials = () => {
  return (
    <div className="header__socials">
        <a href="https://www.linkedin.com/in/prabhat-namdharani/" target="_blank" rel="noopener noreferrer"><BsLinkedin /></a>
        <a href="https://github.com/prabhat-codes" target="_blank" rel="noreferrer"><FaGithub /></a>
    </div>
  )
}

export default headersocials