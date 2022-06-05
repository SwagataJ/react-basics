import React from 'react'
import './navbar.css'
import {HiOutlineHome} from 'react-icons/hi'
import {FiUser} from 'react-icons/fi'
import {MdWorkOutline} from 'react-icons/md'
import {MdDesignServices} from 'react-icons/md'
import {MdGrade} from 'react-icons/md'
import {IoMdPeople} from 'react-icons/io'
import {AiOutlineContacts} from 'react-icons/ai'
import {useState} from 'react'

const Navbar = () => {
  const [activeNav,setActiveNav]=useState('#')
  return (
    <nav>
      <a href="#" onclick={()=>setActiveNav('#')} class={activeNav==='#'?'active':''}><HiOutlineHome class="navbar__icons" /></a>
      <a href="#about" onclick={()=>setActiveNav('#about')} class={activeNav==='#about'?'active':''}><FiUser class="navbar__icons" /></a>
      <a href="#experience"onclick={()=>setActiveNav('#experience')} class={activeNav==='#experience'?'active':''}><MdWorkOutline class="navbar__icons" /></a>
      <a href="#services" onclick={()=>setActiveNav('#services')} class={activeNav==='#services'?'active':''}><MdDesignServices class="navbar__icons" /></a>
      <a href="#portfolio" onclick={()=>setActiveNav('#portfolio')} class={activeNav==='#portfolio'?'active':''}><MdGrade  class="navbar__icons" /></a>      
      <a href="#testimonials" onclick={()=>setActiveNav('#testimonials')} class={activeNav==='#testimonials'?'active':''}><IoMdPeople  class="navbar__icons" /></a>
      <a href="#contact" onclick={()=>setActiveNav('#contact')} class={activeNav==='#contact'?'active':''}><AiOutlineContacts  class="navbar__icons" /></a>
    </nav>
  )
}

export default Navbar