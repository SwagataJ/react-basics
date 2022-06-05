import React from 'react'
import './about.css'
import { GiAchievement } from "react-icons/gi"
import { MdScore } from "react-icons/md"
import { IoIosFolder } from "react-icons/io"
import { GiAbstract021 } from "react-icons/gi"
const about = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About me</h2>
      <div class="container about__container">


        <div class="about__content">
          <div class="about__cards">
            <article class="about__card">
              <GiAchievement class="about__icon" />
              <h5>B.Tech in CSE</h5>
              <small>4th year</small>
            </article>

            <article class="about__card">
              <MdScore class="about__icon" />
              <h5>8.5+ CGPA</h5>
              <small>High grades</small>
            </article>

            <article class="about__card">
              <IoIosFolder class="about__icon" />
              <h5>Projects</h5>
              <small>5+ Completed</small>
            </article>

            <article class="about__card">
              <GiAbstract021 class="about__icon" />
              <h5>PORs</h5>
              <small>5+ Held in 3 years</small>
            </article>
          </div>
          <p>
            I am a third-year B.Tech CSE student seeking a full-time position where I can apply my knowledge and skills for
            continuous improvement.
          </p>
          <p>I have broad experience in managerial skills and automation using Google Suite. I like writing
            and reading! I've delved into software development, Machine Learning, and look forward to more experiences!
          </p>
          <a href="#contact" class="btn btn-primary">Lets Talk</a>
        </div>
      </div>
    </section>
  )
}

export default about