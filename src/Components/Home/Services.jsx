import React from "react";
import { Link } from "react-router-dom";
//import publicrelation from "../../../src/assets/publicrelation.png";
import publicrelation from "../../../src/assets/public-relation.png";
import digitalmarketing from "../../../src/assets/social-media.png";
import webdev from "../../../src/assets/development.png";
import more from "../../../src/assets/application.png";
import jobscareers from "../../../src/assets/camera.png";

const servicesData = [
  {
    image: publicrelation,
    title: "Public Relations",
    link: "/public-relation",
  },
  {
    image: digitalmarketing,
    title: "Digital & Social Media Marketing",
    link: "/digital-marketing",
  },
  {
    image: webdev,
    title: "Web Development",
    link: "/web-development",
  },
  {
    image: jobscareers,
    title: "Video Services",
    link: "/jobs-careers",
  },
  {
    image: more,
    title: "More Services",
    link: "/more-services",
  },
];

const Services = () => {
  const preventDefault = (event) => {
    event.preventDefault();
  };

  return (
    <div
      className="services-container"
      style={{
        backgroundColor: "#FFF",
        padding: "20px",
        paddingBottom: "40px",
        paddingTop: "40px",
      }}
    >
      <h3 className="text-dark" style={{ textAlign: "center", color: "#fff" }}>
        <b>WHAT WE OFFER</b>
      </h3>

      <div
        className="cards-container"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "20px",
        }}
      >
        {servicesData.map((service, index) => (
          <Link
            key={index}
            to={service.link}
            className="card"
            onContextMenu={preventDefault}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#000",
              padding: "20px",
              borderRadius: "15px",
              boxShadow: "0 5px 20px rgba(0, 0, 0, 0.5)",
              textDecoration: "none",
              color: "#fff",
              transition: "0.3s ease-in-out",
            }}
          >
            <img
              src={service.image}
              alt={service.title}
              style={{
                width: "100px",
                height: "100px",
                borderRadius: "5%",
                marginBottom: "15px",
              }}
            />
            <div className="content" style={{ textAlign: "center" }}>
              <b style={{ fontSize: "15px" }}>{service.title}</b>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Services;
