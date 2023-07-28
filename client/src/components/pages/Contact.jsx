import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import CircularProgress from "@mui/material/CircularProgress";
import "../../css/Contact.css";
import { Snackbar } from "@mui/material";

const Contact = () => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    setIsSending(true);

    emailjs
      .sendForm(
        'service_eb5iehg',
        'template_z4yhbyf',
        form.current,
        'TYA92gMvslX9TZbwy'
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsSuccess(true);
          setIsSending(false);
          form.current.reset(); // Reset the form after successful submission
        },
        (error) => {
          console.log(error.text);
          setIsSending(false);
        }
      );
  };

  const handleCloseToast = () => {
    setIsSuccess(false);
  };

  return (
    <div className="container-contact">
      <h1>Contact Us</h1>
      <form ref={form} onSubmit={sendEmail}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="user_name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="user_email" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" required></textarea>
        </div>
        <div className="form-group">
          <button type="submit" disabled={isSending}>
            {isSending ? <CircularProgress size={24} color="inherit" /> : "Send"}
          </button>
        </div>
      </form>
      <Snackbar
        open={isSuccess}
        autoHideDuration={3000}
        onClose={handleCloseToast}
        message="Your message has been sent successfully. We will contact you soon on your given email id."
      />
    </div>
  );
};

export default Contact;
