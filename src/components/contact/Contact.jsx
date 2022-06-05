import React from 'react'
import './contact.css'
import  { useRef } from 'react';
import emailjs from 'emailjs-com'
const data = [
  {
    linkto: "mailto:prabhat.namdharani@gmail.com",
    title: "Send Email",
    actual_id: "prabhat.namdharani@gmail.com"
  },
  {
    linkto: "https://www.linkedin.com/in/prabhat-namdharani/",
    title: "Check out LinkedIn",
    actual_id: "Prabhat Namdharani"
  },
  {
    linkto: "https://wa.me/9987540623",
    title: "Whatsapp",
    actual_id: "9987540623"
  }
]

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_9dcn32n', 'template_t889f64', form.current, 'zJd_FyPmIySR4mlMy')
    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">

        <div className="left_container">
          {
            data.map(({ linkto, title, actual_id }) => {
              return (
                <a href={linkto}>
                  <div class="contact__card">
                    <div class="contact_card_content">
                      <h3>{title}</h3>
                      <p>{actual_id}</p>
                    </div>
                  </div>
                </a>
              )
            })
          }
        </div>

        <form className="right_container" ref={form} onSubmit={sendEmail}>
          <input type="text" placeholder="Your Name" name="Name" className="input__name" style={{height:"5vh"}}/>
          <input type="text" placeholder="Your Email" name="Email" className="input__email" style={{height:"5vh"}}/>
          <input type="text" placeholder="Subject" name="Subject" className="input__subject" style={{height:"5vh"}}/>
          <input type="text" placeholder="Message" name="Message" className="input__message" style={{height:"20vh"}}/>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    </section>
  )
}

export default Contact