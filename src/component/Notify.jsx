import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import '../assets/scss/notify.scss';
import { EmailAPIKey, NotifyKey } from '../data/EmailContent';

const Notify = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    
    emailjs.sendForm(NotifyKey.service, NotifyKey.template, form.current, EmailAPIKey.publicKey)
      .then((result) => {
        console.log(result.text);
        toast.success("Mail sent succesfully");
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <input type="email" name="from_email"  placeholder='Enter your email'/>
      <input type="submit" value="Submit" />
    </form>
  );
};
export default Notify
