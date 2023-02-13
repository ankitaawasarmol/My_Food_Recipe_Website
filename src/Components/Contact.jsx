import React, { useRef } from 'react';
import Navbar from './Navbar';
import emailjs from '@emailjs/browser';
import Footer from './Footer';


function Contact() {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_g28creg', 'template_7uqfc5d', form.current, 'IZkIexx2YsAUJXu1L')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };
  return (
    <>
    <Navbar/>
    <section class="contact" id="contact">
    <h1 class="headingcontact"> Contact <span> Us </span> </h1>

    <div class="icons-container">

        <div class="icons">
            <i class="fas fa-envelope"></i>
            <h3> Email</h3>
            <p>ankitaawasarmol04@gmail.com</p>
        </div>

        <div class="icons">
            <i class="fas fa-phone"></i>
            <h3>Number</h3>
            <p>+91-8149755748</p>
        </div>

        <div class="icons">
            <i class="fas fa-map-marker-alt"></i>
            <h3>Address</h3>
            <p>Nashik-422101</p>
        </div>

    </div>
    {/* form section */}
      <div className='container_contact'>
        <h2 className='text-center'>Contact Form</h2>

        <form ref={form} onSubmit={sendEmail}
        className='form_control_card'>
          <input className='inputs' type="text"
            placeholder="Full Name"
            name="user_name" required/>
            <br/>
            <br/>
            <input className='inputs' type="email"
            placeholder="Enter Email"
            name="user_email" required/>
            <br/>
            <br/>
              <input className='inputs' type="text"
            placeholder="Subject"
            name="subject" required/>
            <br/>
            <br/>
            <textarea  className='inputs'name='message' cols="30" rows="10" placeholder='Type Message....'></textarea>
            <br/>
            <br/>
            <button type='submit' className='btn_contact'>Send Message</button>
        </form>
      </div>
    </section>
    <Footer/>
    </>
  )
}

export default Contact
