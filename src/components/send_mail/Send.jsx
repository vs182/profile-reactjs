import React from 'react';
import emailjs from 'emailjs-com';
import './send.scss'
import { render } from '@testing-library/react';
export default function Send() {

  function sendEmail(e) {
    e.preventDefault();    
    console.log(e.target)
    emailjs.sendForm('service_o2empkg', 'template_o5yi2eh', e.target, 'user_An9vvXlPepCNCGsKzxKQX')
      .then((result) => {
        window.location.reload();
      }, (error) => {
          console.log(error.text);
      });
  }
 
  return (
    <div >

  </div>
  );
}