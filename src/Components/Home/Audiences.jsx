import React from "react";
import analydata from "../../../src/assets/da4.png";

const Audiences = () => {
  const preventDefault = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <div
        className="d-flex flex-column align-items-center justify-content-center"
        style={{
          backgroundColor: "#000",
          marginTop: "10px",
          height: "8vh",
        }}
      >
        <h1 className="text-warning" style={{ paddingTop: "7px" }}>
          <b>REACH AUDIENCES</b>
        </h1>
      </div>

      <div onContextMenu={preventDefault}>
        <img
          src={analydata}
          alt="Analy Data"
          style={{
            width: "100%",
            height: "30vh",
            objectFit: "cover",
            paddingTop: "20px",
          }}
        />
      </div>

      <div className="d-flex flex-column align-items-center justify-content-center">
        <h5
          style={{
            textAlign: "center",
            marginTop: "10px",
            padding: "30px",
            fontWeight: "normal",
          }}
        >
          Our public relations services help organizations, companies, and
          individuals shape their narratives, build brand credibility, manage
          crises, and ultimately cultivate positive public perception. These
          efforts foster trust, attract customers, and boost growth.
        </h5>
      </div>
    </div>
  );
};

export default Audiences;
