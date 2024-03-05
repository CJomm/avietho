import React from "react";
import { Link } from "react-router-dom";
import digital from "../../assets/2.png";

const DigitalMarketing = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>DIGITAL & SOCIAL MEDIA MARKETING </h1>
      <div style={styles.contentContainer}>
        <img src={digital} alt="Digital Marketing Image" style={styles.image} />
        <p style={styles.paragraph}>
          We are experts in omnichannel content, channel, and performance
          marketing. Our team uses different digital channels, such as websites,
          social media platforms, search engines, email, and mobile apps, to
          promote and reach target audiences. It encompasses various strategies
          and tactics, including search engine optimization (SEO), search engine
          marketing (SEM), content marketing, email marketing, influencer
          marketing, and social media marketing.
          <br />
          <br />
          Our Social media services focus on utilizing social media platforms to
          connect and engage with target audiences. It involves creating and
          sharing content, interacting with users, running ad campaigns, and
          analyzing data to drive brand awareness, customer engagement, and lead
          generation.
          <br />
          <br />
          Social media platforms, such as Facebook, Instagram, Twitter,
          LinkedIn, YouTube, and TikTok, have become powerful marketing tools
          due to their widespread popularity and large user bases. They allow
          businesses and individuals to showcase their products or services,
          build brand loyalty, interact with customers, generate leads, and
          drive website traffic.
          <br />
          <br />
          Overall, digital marketing and social media work hand in hand, with
          the latter serving as a key component of the former. Businesses and
          personalities leverage the power of social media to create a strong
          online presence, connect with their target audience, and drive
          meaningful interactions and conversions.
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
          <Link to="/web-development" style={styles.button}>
            <b> Web Development</b>
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

export default DigitalMarketing;
