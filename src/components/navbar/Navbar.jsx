import React from 'react'
import './navbar.css'
import {HiOutlineHome} from 'react-icons/hi'
import {FiUser} from 'react-icons/fi'
import {MdWorkOutline} from 'react-icons/md'
import {MdDesignServices} from 'react-icons/md'
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
      <a href="#contact" onclick={()=>setActiveNav('#contact')} class={activeNav==='#contact'?'active':''}><AiOutlineContacts  class="navbar__icons" /></a>
    </nav>
  )
}

export default Navbar