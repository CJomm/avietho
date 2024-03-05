import React from "react";
import { Link } from "react-router-dom";
import jobs from "../../assets/jobs.png";

const Jobs = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>JOBS AND CAREERS</h1>
      <div style={styles.contentContainer}>
        <img src={jobs} alt="Jobs Image" style={styles.image} />
        <p style={styles.paragraph}>
          INTERNSHIP OPPORTUNITY!
          <br />
          <br />
          Prodigious Public Relations & Advertising is looking for interns who
          are willing to report onsite.
          <br />
          <br />
          Must be enrolled in any of the following courses:
          <br />
          <br />
          • Multimedia
          <br />
          <br />
          • Journalism | AB English | Communication
          <br />
          <br />
          • Any related course
          <br />
          <br />
          • Accountancy (or any related course)
          <br />
          <br />
          For interested applicants, you may submit your CV or resume at
          cisprodigious@gmail.com for further details and assistance.
          <br />
          <br />
          We are located at Unit 502 Admiralty Bldg. Alabang-Zapote Rd.,
          Madrigal Business Park, Brgy. Ayala Alabang, Muntinlupa City.
          <br />
          <br />
          Walk in - Monday to Friday, 1pm to 3pm.
        </p>
      </div>
      <div style={styles.exploreContainer}>
        <h3 style={styles.exploreHeading}>EXPLORE</h3>
        <div style={styles.buttonContainer}>
          <Link to="/public-relation" style={styles.button}>
            Public Relations
          </Link>
          <Link to="/digital-marketing" style={styles.button}>
            Digital Marketing & Social Media Handling
          </Link>
          <Link to="/web-development" style={styles.button}>
            Web Development
          </Link>
          <Link to="/more-services" style={styles.button}>
            More Services
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
    marginBottom: "20px",
  },
  exploreContainer: {
    width: "100%",
    textAlign: "center",
  },
  exploreHeading: {
    marginTop: "20px",
  },
  buttonContainer: {
    marginBottom: "10px",
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

export default Jobs;
