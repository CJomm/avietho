import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import digital from "../../assets/2.png";
import w1 from "../../assets/w1.png";
import w2 from "../../assets/w2.png";
import w3 from "../../assets/w3.png";
import w4 from "../../assets/w4.png";
import w5 from "../../assets/w5.png";

const DigitalMarketing = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="container">
      <h1 className="heading">DIGITAL & SOCIAL MEDIA MARKETING </h1>
      <div className="contentContainer">
        <img
          data-aos="zoom-in-right"
          src={w1}
          alt="Public Relations Image"
          style={{ position: "relative", zIndex: "1" }}
          className="image"
        />

        <img
          data-aos="zoom-in-right"
          src={w2}
          alt="Public Relations Image"
          style={{
            width: "500px",
            paddingTop: "40px",
            position: "relative",
            zIndex: "1",
          }}
          className="image"
        />

        <img
          data-aos="zoom-in-right"
          src={w3}
          alt="Public Relations Image"
          style={{
            position: "relative",
            top: "0",
            left: "0",
            zIndex: "0",
            marginTop: "-310px",
          }}
          className="image"
        />

        <img
          data-aos="zoom-in-left"
          src={w4}
          alt="Public Relations Image"
          style={{
            width: "500px",
            marginTop: "-310px",
            position: "relative",
            zIndex: "1",
            marginLeft: "280px",
          }}
          className="image w4"
        />

        <img
          data-aos="zoom-in-left"
          src={w5}
          alt="Public Relations Image"
          style={{ position: "relative", zIndex: "1" }}
          className="image"
        />
      </div>
      <div className="exploreContainer">
        <h3 className="exploreHeading">
          <b>EXPLORE</b>
        </h3>
        <div className="buttonContainer">
          <Link to="/public-relation" className="button">
            <b> Public Relations</b>
          </Link>
          <Link to="/web-development" className="button">
            <b> Web Development</b>
          </Link>
          <Link to="/jobs-careers" className="button">
            <b> Video Services</b>
          </Link>
          <Link to="/more-services" className="button">
            <b> More Services</b>
          </Link>
        </div>
      </div>
      <style>
        {`
          .container: {
            textAlign: center;
            paddingTop: 20px;
            display: flex,
            flexDirection: column;
            alignItems: center;
          }
          .heading: {
            marginBottom: 20px;
            textAlign: center;
          }
          .contentContainer: {
            width: 100%;
            maxWidth: 800px;
            textAlign: justify;
            paddingRight: 10px;
            paddingLeft: 10px;
          }
          .image: {
            marginTop: 20px;
            width: 80%;
            maxWidth: 400px;
            height: auto;
            display: block;
            margin: 0 auto;
          }
          .paragraph: {
            textAlign: justify;
            marginTop: 20px;
            fontSize: 20px;
            lineHeight: 30px;
          }
          .list: {
            textAlign: ;justify;
            fontSize: 20px;
            marginTop: 20px;
          }
          .exploreContainer: {
            width: 100%,
            textAlign: center;
          }
          .exploreHeading: {
            marginTop: 20px;
          }
          .buttonContainer: {
            marginBottom: 20px;
          }
          .button: {
            display: block;
            padding: 10px;
            backgroundColor: #f0f0f0;
            marginBottom: 10px;
            textDecoration: none;
            color: #000;
            borderRadius: 5px;
            width: 300px;
            margin: 10px auto;
          }

          @media screen and (max-width: 768px) {
            .contentContainer {
              flex-direction: column;
              align-items: center;
            }
            
            .image {
              width: 100%;
              max-width: 400px;
            }
          
            .w4 {
            
              padding-top: 300px;
              margin-left: 0;
              max-width: 400px;
              width: 80%;
          }
        `}
      </style>
    </div>
  );
};

export default DigitalMarketing;
