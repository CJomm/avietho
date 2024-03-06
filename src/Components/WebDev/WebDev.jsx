import React from "react";
import { Link } from "react-router-dom";
import webdev from "../../assets/3.png";

const WebDev = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>WEB DEVELOPMENT</h1>
      <div style={styles.contentContainer}>
        <img src={webdev} alt="Web Development Image" style={styles.image} />
        <p style={styles.paragraph}>
          Avietho Digital Marketing Website Development Services involve the
          creation, design, and maintenance of websites for individuals,
          businesses, organizations, or any entity looking to establish an
          online presence.
          <br />
          <br />
          These services encompass a range of activities, including:
          <br />
          <br />
          <b>Web Design:</b> Creating visually appealing and user-friendly
          website layouts and interfaces that align with the client's brand
          identity and goals. This includes selecting color schemes, fonts,
          graphics, and overall visual elements.
          <br />
          <br />
          <b>Front-end Development:</b> Writing code using programming languages
          such as HTML, CSS, and JavaScript to build the structure, layout, and
          interactive features of a website that users can see and interact
          with.
          <br />
          <br />
          <b>Back-end Development:</b> Developing the server-side functionality
          of a website using programming languages such as PHP, Python, Ruby, or
          .NET. This includes database management, server configuration, and
          integration of advanced features such as content management systems
          (CMS) or e-commerce platforms.
          <br />
          <br />
          <b>Content Creation:</b> Assisting in the creation, editing, and
          optimization of website content, including text, images, videos, and
          other media to ensure it is engaging, informative, and search engine
          friendly.
          <br />
          <br />
          <b>Responsive Design: </b> Assisting in the creation, editing, and
          optimization of website content, including text, images, videos, and
          other media to ensure it is engaging, informative, and search engine
          friendly.
          <br />
          <br />
          <b>Search Engine Optimization (SEO): </b> Assisting in the creation,
          editing, and optimization of website content, including text, images,
          videos, and other media to ensure it is engaging, informative, and
          search engine friendly.
          <br />
          <br />
          <b>Website Testing and Quality Assurance: </b> Assisting in the
          creation, editing, and optimization of website content, including
          text, images, videos, and other media to ensure it is engaging,
          informative, and search engine friendly.
          <br />
          <br />
          <b>Website Maintenance and Updates: </b> Assisting in the creation,
          editing, and optimization of website content, including text, images,
          videos, and other media to ensure it is engaging, informative, and
          search engine friendly.
          <br />
          <br />
          Our website development services are essential for establishing a
          professional online presence, attracting and engaging website
          visitors, and achieving specific business goals, such as generating
          leads, driving sales, or sharing information. Professional website
          development helps businesses showcase their products or services,
          increase brand visibility, and create a positive user experience,
          ultimately contributing to business growth and success.
          <br />
          <br />
          <b>Goals and Objectives</b>
          <br />
          <br />
          <b>Enhance Online Presence:</b> The primary goal of this project is to
          establish a strong online presence for the client by creating a
          professional and visually appealing website.
          <br />
          <br />
          <b>Improve User Experience:</b> Our team will focus on creating a
          user-centric design that provides visitors and constituents with an
          intuitive and seamless browsing experience. This will include easy
          navigation, fast page loading speeds, and mobile responsiveness.
          <br />
          <br />
          <b>Boost engagement and awareness:</b> Through the implementation of
          effective call-to-action buttons and strategic placement of
          information, we aim to increase user engagement and awareness on the
          website.
          <br />
          <br />
          <b>Showcase of Achievements and Services:</b> The website will serve
          as a platform to showcase the achievements and public announcements or
          services of the client to be engaging and informative.
          <br />
          <br />
          <b>Increase Constituents Interaction: </b>Integrating features such as
          contact forms, and social media integration that will enable better
          communication between the client and its constituents, leading to
          increased satisfaction.
          <br />
          <br />
        </p>
      </div>
      <div style={styles.exploreContainer}>
        <h3 style={styles.exploreHeading}>
          <b>EXPLORE</b>
        </h3>
        <div style={styles.buttonContainer}>
          <Link to="/public-relation" style={styles.button}>
            <b> Public Relations</b>
          </Link>
          <Link to="/digital-marketing" style={styles.button}>
            <b> Digital & Social Media Marketing </b>
          </Link>
          <Link to="/jobs-careers" style={styles.button}>
            <b> Video Services</b>
          </Link>
          <Link to="/more-services" style={styles.button}>
            <b> More Services</b>
          </Link>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    paddingTop: "20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  heading: {
    marginBottom: "20px",
    textAlign: "center",
  },
  contentContainer: {
    width: "100%",
    maxWidth: "800px",
    textAlign: "justify",
    paddingRight: "10px",
    paddingLeft: "10px",
  },
  image: {
    marginTop: "20px",
    width: "80%",
    maxWidth: "400px",
    height: "auto",
    display: "block",
    margin: "0 auto",
  },
  paragraph: {
    textAlign: "justify",
    marginTop: "20px",
    fontSize: "20px",
    lineHeight: "30px",
  },
  list: {
    textAlign: "justify",
    fontSize: "20px",
    marginTop: "20px",
  },
  exploreContainer: {
    width: "100%",
    textAlign: "center",
  },
  exploreHeading: {
    marginTop: "20px",
  },
  buttonContainer: {
    marginBottom: "20px",
  },
  button: {
    display: "block",
    padding: "10px",
    backgroundColor: "#f0f0f0",
    marginBottom: "10px",
    textDecoration: "none",
    color: "#000",
    borderRadius: "5px",
    width: "300px",
    margin: "10px auto",
  },
};

export default WebDev;
