import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import aa from "../../assets/31.png";
import bb from "../../assets/32.png";
import cc from "../../assets/33.png";
import p1 from "../../assets/p1.png";
import p2 from "../../assets/p2.png";
import p3 from "../../assets/p3.png";
import p4 from "../../assets/p4.png";
import p5 from "../../assets/p5.png";
import p6 from "../../assets/p6.png";
import p7 from "../../assets/p7.png";
import mid from "../../assets/mid.png";
import "../../../src/Components/PublicRelations/PublicRelation.css";

const PublicRelations = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="container">
      <h1 className="heading">TRADITIONAL AND DIGITAL PUBLIC RELATIONS</h1>
      <div className="contentContainer">
        <img
          data-aos="flip-left"
          src={aa}
          alt="Public Relations Image"
          className="image"
        />
        <div className="imagesContainer">
          <img
            data-aos="zoom-in-right"
            src={bb}
            alt="Public Relations Image"
            className="image2"
          />
          <img
            data-aos="zoom-in-left"
            src={cc}
            alt="Public Relations Image"
            className="image2"
          />
        </div>

        <div className="paragraph">
          Avietho Digital Marketing Services combines traditional and digital PR
          to achieve numerous benefits including broader reach, synergy between
          channels, adaptability to changing media landscapes, improved
          measurement and analytics, brand consistency, increased visibility,
          and enhanced engagement with your audience. By leveraging the
          strengths of both approaches, we build a comprehensive PR strategy
          that effectively communicates your brand's message and achieves your
          communication objectives.
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              data-aos="zoom-in-right"
              src={p2}
              alt="Public Relations Image"
              style={{
                marginRight: "-50%",
                maxWidth: "400px",
                marginTop: "-1020px",
              }}
            />

            <img
              data-aos="zoom-in-right"
              src={p4}
              alt="Public Relations Image"
              style={{
                marginRight: "-50%",
                maxWidth: "400px",
                marginTop: "30px",
              }}
            />
            <img
              data-aos="zoom-in-right"
              src={p6}
              alt="Public Relations Image"
              style={{
                marginRight: "5%",
                maxWidth: "400px",
                marginTop: "1150px",
              }}
            />

            <img
              data-aos="zoom-in-left"
              src={mid}
              alt="Public Relations Image"
              style={{
                width: "50%",
                maxWidth: "300px",
                marginTop: "30px",
              }}
            />

            <img
              data-aos="zoom-in-left"
              src={p1}
              alt="Public Relations Image"
              style={{
                marginLeft: "5%",
                maxWidth: "400px",
                marginTop: "-1580px",
              }}
            />
            <img
              data-aos="zoom-in-left"
              src={p3}
              alt="Public Relations Image"
              style={{
                marginLeft: "-50%",
                maxWidth: "400px",
                marginTop: "-470px",
              }}
            />
            <img
              data-aos="zoom-in-left"
              src={p5}
              alt="Public Relations Image"
              style={{
                marginLeft: "-50%",
                maxWidth: "400px",
                marginTop: "600px",
              }}
            />
            <img
              data-aos="zoom-in-left"
              src={p7}
              alt="Public Relations Image"
              style={{
                marginLeft: "-50%",
                maxWidth: "400px",
                marginTop: "1670px",
              }}
            />
          </div>
          Our public relations services help organizations, companies, and
          individuals shape their narratives, build brand credibility, manage
          crises, and ultimately cultivate positive public perception. These
          efforts foster trust, attract customers, and boost growth.
        </div>
      </div>
      <div className="exploreContainer">
        <h3 className="exploreHeading">
          <b>EXPLORE</b>
        </h3>
        <div className="buttonContainer">
          <Link to="/digital-marketing" className="button">
            <b> Digital & Social Media Marketing </b>
          </Link>
          <Link to="/web-development" className="button">
            <b> Web Development</b>
          </Link>
          <Link to="/jobs-careers" className="button">
            <b>Video Services</b>
          </Link>
          <Link to="/more-services" className="button">
            <b> More Services</b>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PublicRelations;
