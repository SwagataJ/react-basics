import React from 'react'
import './services.css'
import { GiAchievement } from "react-icons/gi"
import { MdScore } from "react-icons/md"
import { IoIosFolder } from "react-icons/io"
import { GiAbstract021 } from "react-icons/gi"

const services = () => {
  return (
    <section id="services">
      <h5>Positions of</h5>
      <h2>Responsibility</h2>
      <div class="container services__container">
        <div class="service__cards">

          <article class="service__card">

            <article class="to_be_replaced">
              <GiAbstract021 class="service__icon" />
              <h5>SDE,</h5><h5>Wells Fargo</h5>
              <small>May 2022-July 2022</small>
            </article>

            <article class="to_replace">
              <p>Worked as a Software Development Intern, in a team to develop tools that could be used to automate vulnerability organization.</p>
            </article>

          </article>

          <article class="service__card">

            <article class="to_be_replaced">
              <GiAchievement class="service__icon" />
              <h5>National Secretary, IAESTE India</h5>
              <small>Aug 2021-Aug 2022</small>
            </article>
            <article class="to_replace">
              <p>Representing IAESTE India,while managing the international
                affairs and implementing effective strategies for the same.</p>
            </article>

          </article>

          <article class="service__card">

            <article class="to_be_replaced">
              <MdScore class="service__icon" />
              <h5>SDE</h5><h5>Netlab India</h5>
              <small>June 2021-Aug 2021</small>
            </article>

            <article class="to_replace">
              <p>Used Pandas and Python to work with data, for creating the
                backend of a excel-manipulation portal for the company.</p>
            </article>

          </article>

          <article class="service__card">

            <article class="to_be_replaced">
              <IoIosFolder class="service__icon" />
              <h5>ITS Team Member, IAESTE India</h5>
              <small>Feb 2021-May 2021</small>
            </article>

            <article class="to_replace">
              <p>Automation using Google scripts, analysing websites and creating tools to stream-line the internal procedures.</p>
            </article>

          </article>

          <article class="service__card">

            <article class="to_be_replaced">
              <GiAbstract021 class="service__icon" />
              <h5>Data Analyst, IAESTE LC MU</h5>
              <small>Dec 2020-Dec 2021</small>
            </article>

            <article class="to_replace">
              <p>Automated various procedures inside the organization via Google Appscript,
                and managed the data using G-Suite</p>
            </article>

          </article>


          <article class="service__card">

            <article class="to_be_replaced">
              <GiAbstract021 class="service__icon" />
              <h5>Editor,</h5><h5>Blank 101</h5>
              <small>August 2020-August 2021</small>
            </article>

            <article class="to_replace">
              <p>Edited and oversaw various articles and posts for the
                club, Blank 101, with a total greater than 30.</p>
            </article>
          </article>

          <article class="service__card">
            <article class="to_be_replaced">
              <GiAbstract021 class="service__icon" />
              <h5>CTO,</h5><h5>MealDeal</h5>
              <small>September 2020 - September 2021</small>
            </article>

            <article class="to_replace">
              <p>Set up and handled the technical needs of the organization,
                and handling the technical side overall.</p>
            </article>
          </article>

          <article class="service__card">
            <article class="to_be_replaced">
              <GiAbstract021 class="service__icon" />
              <h5>Feedback Software </h5><h5>Dev Intern</h5>
              <small>June 2021-August 2021</small>
            </article>

            <article class="to_replace">
              <p>Researching and gathering data, while creating automated
                feedback systems for the same project.</p>
            </article>
          </article>

        </div>
      </div>
    </section>
  )
}

export default services