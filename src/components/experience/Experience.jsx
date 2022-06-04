import React from 'react'
import './experience.css'
import {HiChip} from 'react-icons/hi' 
import {HiCode} from 'react-icons/hi'
const experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I have</h5>
      <h2>My Experience</h2>

      <div class="container experience__container">
        <div className="experience__card">
          <h3>Technical Skills</h3>
          <div class="experience_content">
            
            <article class="experience_details">
              <HiCode class="experience__icons" />
              <h4>HTML5</h4>
              <small class="text-light">Experienced</small>
            </article>

            <article class="experience_details">
              <HiCode class="experience__icons" />
              <h4>DS</h4>
              <small class="text-light">Intermediate</small>
            </article>
            
            <article class="experience_details">
              <HiCode class="experience__icons" />
              <h4>JS</h4>
              <small class="text-light">Intermediate</small>
            </article>
            
            <article class="experience_details">
              <HiCode class="experience__icons" />
              <h4>CSS</h4>
              <small class="text-light">Intermediate</small>
            </article>
            
            <article class="experience_details">
              <HiCode class="experience__icons" />
              <h4>ML</h4>
              <small class="text-light">Beginner</small>
            </article>
            
            <article class="experience_details">
              <HiCode class="experience__icons" />
              <h4>OpenCV</h4>
              <small class="text-light">Beginner</small>
            </article>

            <article class="experience_details">
              <HiCode class="experience__icons" />
              <h4>Google Appscript</h4>
              <small class="text-light">Intermediate</small>
            </article>

            <article class="experience_details">
              <HiCode class="experience__icons" />
              <h4>Pandas</h4>
              <small class="text-light">Experienced</small>
            </article>

            <article class="experience_details">
              <HiCode class="experience__icons" />
              <h4>C++,C</h4>
              <small class="text-light">Intermediate</small>
            </article>

            <article class="experience_details">
              <HiCode class="experience__icons" />
              <h4>Python</h4>
              <small class="text-light">Intermediate</small>
            </article>

          </div>
        </div>
{/* Non Technical Skills */}
        <div className="experience__card">
          <h3>Non-Technical Skills</h3>
          <div class="experience_content">
            
            <article class="experience_details">
              <HiChip class="experience__icons" />
              <h4>Leadership</h4>
              <small class="text-light">Experienced</small>
            </article>

            <article class="experience_details">
              <HiChip class="experience__icons" />
              <h4>Canva</h4>
              <small class="text-light">Experienced</small>
            </article>
            
            <article class="experience_details">
              <HiChip class="experience__icons" />
              <h4>Editing</h4>
              <small class="text-light">Experienced</small>
            </article>
            
            <article class="experience_details">
              <HiChip class="experience__icons" />
              <h4>Writing</h4>
              <small class="text-light">Experienced</small>
            </article>
            
            <article class="experience_details">
              <HiChip class="experience__icons" />
              <h4>MS Office</h4>
              <small class="text-light">Experienced</small>
            </article>
              
            <article class="experience_details">
              <HiChip class="experience__icons" />
              <h4>Figma</h4>
              <small class="text-light">Intermediate</small>
            </article>

            <article class="experience_details">
              <HiChip class="experience__icons" />
              <h4>Adobe Illustrator</h4>
              <small class="text-light">Beginner</small>
            </article>

            <article class="experience_details">
              <HiChip class="experience__icons" />
              <h4>Google Suite</h4>
              <small class="text-light">Experienced</small>
            </article>
            
          </div>
        </div>

      </div>
    </section>
  )
}

export default experience