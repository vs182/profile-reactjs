import { useState } from "react";
import "./contact.scss";
import emailjs from 'emailjs-com';
export default function Contact() {
  const [message, setMessage] = useState(false);

  function handleSubmit(e) {
    document.getElementById('submit').innerHTML = "sending.."
    e.preventDefault();    
    console.log(e.target)
    emailjs.sendForm('service_o2empkg', 'template_o5yi2eh', e.target, 'user_An9vvXlPepCNCGsKzxKQX')
      .then((result) => {
        setTimeout(()=>{
          document.getElementById('submit').innerHTML = "sent"
        },2000)
        
      }, (error) => {
          console.log(error.text);
      });
  }
  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/shake.svg" alt="" />
      </div>
      <div className="right">
        <h2>Contact.</h2>
        <form onSubmit={handleSubmit}>
        <input required name='from_name' type="text" placeholder="Name" />
        <input name='from_email' required type="email" placeholder="Email" />
        <input name='subject' required type="text" placeholder="Subject" />
        <textarea name="message" required placeholder="Message"></textarea>
        <button id="submit" type="submit">Send</button>
      </form>
      </div>
    </div>
  );
}
