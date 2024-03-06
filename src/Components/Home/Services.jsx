import React from "react";
import { Link } from "react-router-dom";
//import publicrelation from "../../../src/assets/publicrelation.png";
import publicrelation from "../../../src/assets/n1.png";
import digitalmarketing from "../../../src/assets/n2.png";
import webdev from "../../../src/assets/n3.png";
import more from "../../../src/assets/n5.png";
import vid from "../../../src/assets/n4.png";

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
    image: vid,
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
      <h2 className="text-dark" style={{ textAlign: "center" }}>
        WHAT WE OFFER
      </h2>

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
              backgroundColor: "#ddd",
              padding: "20px",
              borderRadius: "15px",
              boxShadow: "0 5px 10px rgba(0, 0, 0, 0.9)",
              textDecoration: "none",
              color: "#000",
              transition: "0.3s ease-in-out",
            }}
          >
            <img
              src={service.image}
              alt={service.title}
              style={{
                width: "150px",
                height: "auto",
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
