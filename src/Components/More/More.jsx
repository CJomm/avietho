import React from "react";
import more from "../../assets/5.png";
import { Link } from "react-router-dom";

const More = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>MORE SERVICES</h1>
      <div style={styles.contentContainer}>
        <img src={more} alt="Web Development Image" style={styles.image} />
        <p style={styles.paragraph}>
          <b>SOCIAL MEDIA ACCOUNT - PAGE MANAGEMENT & MAINTENANCE</b>
          <br />
          <br />
          • Business and Individual Branding Manual <br />
          • Creative Content
          <br />
          • Video and Photo <br />
          • Template poster designs <br />
          <br />
          <b>PRINTING SERVICES</b>
          <br />
          <br />
          • Tarpaulin and Poster designs
          <br />
          • Material designs
          <br />
          • Coffee Table Book
          <br />
          • Souvenir designs and concept
          <br />
          • Magazine
          <br />
          • Stickers <br />
          • Other Printing Materials
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
          <Link to="/web-development" style={styles.button}>
            <b>Web Development</b>
          </Link>
          <Link to="/jobs-careers" style={styles.button}>
            <b> Video Services</b>
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

export default More;
