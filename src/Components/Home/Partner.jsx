import React from "react";
import rj from "../../../src/assets/rj.png";
import { Link } from "react-router-dom";

const Partner = () => {
  const preventDefault = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <div
        className="d-flex flex-column align-items-center justify-content-center"
        style={{
          backgroundColor: "#000",
          marginTop: "430px",
          height: "8vh",
        }}
      >
        <h1 className="text-warning" style={{ paddingTop: "7px" }}>
          <b>PARTNERSHIP</b>
        </h1>
      </div>
      <div
        className="d-flex flex-column align-items-center"
        style={{ marginTop: "20px" }}
      >
        <div
          onContextMenu={preventDefault}
          style={{ width: "80%", maxWidth: "400px" }}
        >
          <img
            src={rj}
            alt="RJ Logo"
            style={{ width: "100%", height: "auto", pointerEvents: "none" }}
          />
        </div>
        <div style={{ maxWidth: "800px", padding: "30px" }}>
          <h2 style={{ textAlign: "center" }}>
            <b>
              Our partnership with R. & Associates law firm combines strategic
              communication skills.
            </b>
          </h2>
          <br />
          <h2 style={{ textAlign: "center" }}>
            <b>Crisis Management</b>
          </h2>

          <h5 style={{ textAlign: "justify", fontWeight: "normal" }}>
            Avietho Digital Marketing and R. & Associates specialize in managing
            and protecting our clients' reputations during crises. By partnering
            with R. & Associates, we can provide valuable guidance on navigating
            the legal aspects of a crisis. Our collaboration ensures a cohesive
            and comprehensive approach to crisis management, enabling swift and
            effective responses that address both legal and reputational
            concerns.
          </h5>
          <br />
          <h2 style={{ textAlign: "center" }}>
            <b>Media Relations</b>
          </h2>

          <h5 style={{ textAlign: "justify", fontWeight: "normal" }}>
            We excel in cultivating positive relationships with the media and
            promoting favorable coverage of our clients. We can draw upon legal
            expertise to craft media messaging that ensures accuracy,
            compliance, and protection of the client's legal interests. R. &
            Associates provides guidance on managing legal risks and ensuring
            that any information shared with the media complies with applicable
            laws and regulations.
          </h5>
          <br />
          <div style={{ textAlign: "center" }}>
            <Link to="/pship" style={{ textDecoration: "none" }}>
              <button
                className="btn"
                style={{
                  backgroundColor: "black",
                  color: "white",
                  fontSize: "22px",
                  width: "350px",
                }}
              >
                <b> Learn More</b>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partner;
