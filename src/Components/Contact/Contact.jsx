import React, { useState } from "react";
import emailjs from "emailjs-com";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarker,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import contact from "../../assets/fb.png";
import loc from "../../assets/location.png";
import tel from "../../assets/telephone-call.png";
import em from "../../assets/email.png";
import "../../Components/Contact/Contact.css";
import Map from "./Map";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await emailjs.send(
        "service_n8jvxe9",
        "template_s50obbt",
        formData,
        "dD1orUIt931NJ6bnL"
      );

      if (response.status === 200) {
        alert("Your message has been sent!");
      } else {
        alert(
          "There was an error sending your message. Please try again later."
        );
      }
    } catch (error) {
      console.error("Error sending message:", error);
      alert("There was an error sending your message. Please try again later.");
    }
  };

  return (
    <section id="contact" style={{ paddingBottom: "50px" }}>
      <h1 className="section-header">For Inquiries</h1>
      <div className="contact-wrapper">
        <form
          id="contact-form"
          className="form-horizontal"
          role="form"
          onSubmit={handleSubmit}
        >
          <div className="form-group">
            <div className="col-sm-12">
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="NAME"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12">
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="EMAIL"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12">
              <textarea
                className="form-control"
                rows="10"
                placeholder="MESSAGE"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
          </div>
          <button
            className="btn btn-warning send-button"
            id="submit"
            type="submit"
            value="SEND"
          >
            <span className="send-text">SEND</span>
          </button>
        </form>
        <div className="direct-contact-container">
          <ul className="contact-list" style={{ paddingTop: "10px" }}>
            <li className="list-item">
              <FontAwesomeIcon
                icon={faMapMarker}
                size="2x"
                style={{ paddingTop: "10px" }}
              />
              <span className="contact-text place">
                Unit 502 Admiralty Bldg. Alabang-Zapote Rd., Madrigal Business
                Park , Brgy. Ayala Alabang, Muntinlupa City 1700 Muntinlupa
                City, Philippines
              </span>
            </li>
            <li className="list-item">
              <FontAwesomeIcon
                icon={faPhone}
                size="2x"
                style={{ paddingTop: "10px" }}
              />
              <span className="contact-text phone">
                <a href="#" title="Give me a call">
                  0962 710 5470
                </a>
              </span>
            </li>
            <li className="list-item">
              <FontAwesomeIcon
                icon={faEnvelope}
                size="2x"
                style={{ paddingTop: "10px" }}
              />
              <span className="contact-text gmail">
                <a
                  href="mailto:aviethodigital@gmail.com"
                  title="Send me an email"
                >
                  aviethodigital@gmail.com
                </a>
              </span>
            </li>
          </ul>
          <hr />
          <ul className="social-media-list">
            <li>
              <a
                href="https://www.facebook.com/cisprodigious"
                target="_blank"
                className="contact-icon"
              >
                <img src={contact} alt="Facebook" />
              </a>
            </li>
            <li>
              <a
                href="https://www.google.com/maps/place/Admiralty+Building,+Ayala+Alabang,+Muntinlupa,+Metro+Manila/@14.4261828,121.0217406,17z/data=!3m1!4b1!4m10!1m2!2m1!1sUnit+502+Admiralty+Bldg.+Alabang-Zapote+Rd.,+Madrigal+Business+Park+,+Brgy.+Ayala+Alabang,+Muntinlupa+City+1700+Muntinlupa+City,+Philippines!3m6!1s0x3397d1ce681dedef:0x85cad0eddb2b0815!8m2!3d14.4261777!4d121.0266115!15sCowBVW5pdCA1MDIgQWRtaXJhbHR5IEJsZGcuIEFsYWJhbmctWmFwb3RlIFJkLiwgTWFkcmlnYWwgQnVzaW5lc3MgUGFyayAsIEJyZ3kuIEF5YWxhIEFsYWJhbmcsIE11bnRpbmx1cGEgQ2l0eSAxNzAwIE11bnRpbmx1cGEgQ2l0eSwgUGhpbGlwcGluZXOSARFjb21wb3VuZF9idWlsZGluZ-ABAA!16s%2Fg%2F1tcxxbn2?entry=ttu"
                target="_blank"
                className="contact-icon"
              >
                <img src={loc} alt="Location" />
              </a>
            </li>

            <li>
              <a
                href="mailto:aviethodigital@gmail.com"
                target="_blank"
                className="contact-icon"
              >
                <img src={em} alt="Email" />
              </a>
            </li>
          </ul>
          <hr />
        </div>
      </div>
      <Map />
    </section>
  );
};

export default Contact;
