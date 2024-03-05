import React from "react";
import { Link } from "react-router-dom";
import publicrelation from "../../assets/1.png";

const PublicRelations = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>PUBLIC RELATIONS</h1>
      <div style={styles.contentContainer}>
        <img
          src={publicrelation}
          alt="Public Relations Image"
          style={styles.image}
        />
        <div style={styles.paragraph}>
          Avietho Digital Marketing Services involve strategic communication
          activities to manage and maintain a positive image and reputation for
          a company or individual. These services help organizations build
          strong relationships with their audiences, including customers,
          employees, investors, the media, and the general public.
          <ul style={styles.list}>
            <li>
              <b>Media Relations:</b> Managing relationships with journalists,
              bloggers, and other media professionals to secure positive media
              coverage and handle crisis communications. <br />
              <br />
            </li>
            <li>
              <b> Press Release Creation and Distribution: </b>Crafting and
              distributing official statements about company news, events,
              product launches, or other updates to generate media and public
              interest.
              <br />
              <br />
            </li>
            <li>
              <b>Crisis Management:</b> Developing strategies and communication
              plans to effectively handle and mitigate negative incidents or
              crises that may impact clients' reputations.
              <br />
              <br />
            </li>
            <li>
              <b>Reputation Management:</b> Monitoring and managing the online
              reputation of a company or individual, including addressing
              negative reviews, managing online presence, and responding to
              feedback.
              <br />
              <br />
            </li>
            <li>
              <b>Stakeholder Engagement:</b> Building relationships with key
              stakeholders, such as customers, employees, investors, and
              community members, to foster trust and support for an
              organization.
              <br />
              <br />
            </li>
            <li>
              <b>Event Planning and Management:</b> Organizing and promoting
              events, such as conferences, press conferences, product launches,
              and trade shows, to generate media coverage, attract attendees,
              and enhance brand visibility.
              <br />
              <br />
            </li>
            <li>
              <b>Social Media Management:</b> Developing and executing social
              media strategies to engage with the target audience, share
              relevant content, and enhance brand perception.
            </li>
          </ul>
          Our public relations services help organizations, companies, and
          individuals shape their narratives, build brand credibility, manage
          crises, and ultimately cultivate positive public perception. These
          efforts foster trust, attract customers, and boost growth.
        </div>
      </div>
      <div style={styles.exploreContainer}>
        <h3 style={styles.exploreHeading}>
          <b>EXPLORE</b>
        </h3>
        <div style={styles.buttonContainer}>
          <Link to="/digital-marketing" style={styles.button}>
            <b> Digital & Social Media Marketing </b>
          </Link>
          <Link to="/web-development" style={styles.button}>
            <b> Web Development</b>
          </Link>
          <Link to="/jobs-careers" style={styles.button}>
            <b>Video Services</b>
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

export default PublicRelations;
