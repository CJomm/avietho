import React from "react";
import RJ from "../../assets/rj.png";

const Partnership = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>PARTNERSHIP</h1>
      <div style={styles.contentContainer}>
        <img src={RJ} alt="RJ" style={styles.image} />
        <div style={styles.paragraph}>
          <b>
            Our partnership with R. & Associates law firm combines with
            strategic communication skills.
          </b>
          <div style={styles.list}>
            <b>1. Crisis Management: </b> Avietho Digital and R. & Associates
            specializes in managing and protecting our clients' reputations
            during crises. By partnering with R. & Associates, We can provide
            valuable guidance on navigating the legal aspects of a crisis. Our
            collaboration ensures a cohesive and comprehensive approach to
            crisis management, enabling swift and effective responses that
            address both legal and reputational concerns. <br />
            <br />
            <b>2. Media Relations: </b>We excel in cultivating positive
            relationships with the media and promoting favorable coverage of our
            clients. We can draw upon legal expertise to craft media messaging
            that ensures accuracy, compliance, and protection of the client's
            legal interests. R. & Associates provides guidance on managing legal
            risks and ensuring that any information shared with the media
            complies with applicable laws and regulations.
            <br />
            <br />
            <b>3. Thought Leadership and Content Development:</b> Developing
            strategies and communication plans to effectively handle and
            mitigate negative incidents or crises that may impact clients'
            reputations.
            <br />
            <br />
            <b>4. Reputation Management: </b> Monitoring and managing the online
            reputation of a company or individual, including addressing negative
            reviews, managing online presence, and responding to feedback.
            <br />
            <br />
            <b>5. Legal and Regulatory Communication: </b> Building
            relationships with key stakeholders, such as customers, employees,
            investors, and community members, to foster trust and support for an
            organization.
            <br />
            <br />
          </div>
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
    paddingLeft: "20px",
    paddingRight: "20px",
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

export default Partnership;
