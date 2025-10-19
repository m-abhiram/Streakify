import React from "react";
import "./ContactUs.css";

const ContactUs = () => {
  return (
    <div className="contact-page">
      <h1>Contact Us</h1>
      <p>
        We’d love to hear from you! Whether it’s feedback, questions, or
        collaboration ideas — feel free to reach out.
      </p>
      <div className="contact-box">
        <p>
          📩 You can contact me at <br />
          <div className="contact-email" >
            mabhiram255@gmail.com
          </div>
        </p>
      </div>
    </div>
  );
};

export default ContactUs;
