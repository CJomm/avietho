import React from "react";
import { Link } from "react-router-dom";
import jobs from "../../assets/4.png";

const VidServices = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>VIDEO SERVICES</h1>
      <div style={styles.contentContainer}>
        <img src={jobs} alt="Jobs Image" style={styles.image} />
        <p style={styles.paragraph}>
          <b>I. SERVICES</b>
          <br />
          <br />
          <b>1. Live Coverage / Media Production Team</b>
          <br />
          <br />
          <b>
            a. Conceptualization, Storyboarding, Live set-up, Promotions and
            Advertising.
          </b>
          <br />
          <br />
          <b>2. Promotional Video</b>
          <br />
          <br />
          <b>a. Special Video (Project base)</b>
          <br />
          <br />
          Live coverage
          <br /> Highlight content <br />
          Drone/Aerial video
          <br /> Creative video shoot
          <br /> Same Day Edit (SDE)
          <br />
          <br />
          <b>b. Full Length (Target base)</b>
          <br />
          <br />
          Series
          <br /> Highlight content
          <br />
          Strategic video content
          <br /> Full set production
          <br />
          Info narrative
          <br />
          <br />
          <b>c. Clip Advertisement / Short Video</b>
          <br />
          <br />
          Short clips
          <br />
          Reels
          <br />
          Promotion
          <br />
          Teaser/Trailer
          <br />
          Infomercial
          <br />
          Video banking
          <br />
          <br />
          <b>d. Production</b>
          <br />
          <br />
          <b>a. On-ground events live streaming</b>
          <br />
          <br />
          Technical
          <br />
          Live Operator
          <br />
          <br />
          <b>b. Video production (project based)</b>
          <br />
          <br />
          <b>c. Strategic concept video</b>
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
            <b>Public Relations</b>
          </Link>
          <Link to="/digital-marketing" style={styles.button}>
            <b>Digital & Social Media Marketing</b>
          </Link>
          <Link to="/jobs-careers" style={styles.button}>
            <b>Video Services</b>
          </Link>
          <Link to="/more-services" style={styles.button}>
            <b>More Services</b>
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

export default VidServices;
