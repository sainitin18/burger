import React from 'react'
import Burger from "../images/contact.jpg"
import "../styles/Contact.css"

function Contact() {
  const imageStyle = {
    backgroundImage: `url(${Burger})`,
  };
  return (
    <div className='contact'>
      <div className='leftSide' style={imageStyle}>
      </div>
      <div className='rightSide'>
        <h1>Contact Us</h1>
        <form id="contact-form" method="Get/Post">
          <label htmlFor='name'>Full Name</label>
          <input name='name' placeholder='Enter Full Name' type="text" />
          <label htmlFor='email'>Email</label>
          <input name='name' placeholder='Enter Email' type="email" />
          <label htmlFor='message'>Message</label>
          <textarea rows="6" placeholder='Enter Message' name="message" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  )
}

export default Contact
