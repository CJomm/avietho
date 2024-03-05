import React from "react";
import dep from "../../assets/dep.png";

const Join = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "50vh",
        paddingTop: "0px",
        marginTop: 150,
      }}
    >
      <div
        className="wrapper"
        style={{
          width: "100%",
          height: "100vh",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <img
          src={dep}
          alt="Department"
          className="frame"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            animation: "zoomeffect 10s infinite",
            opacity: ".8",
          }}
        />
        <div className="overlay-text">
          Join the Spotlight and Amplify Your Brand With Us! <br />
          <br />
          AVIETHO DIGITAL MARKETING is your partner in unleashing the full
          potential of your brand! <br />
          <br />
          Fueling Growth, Inspiring Change: Digital Creative Solutions
        </div>
      </div>
      <style>
        {`
          @keyframes zoomeffect {
            0% {
              transform: scale(1, 1);
            }
            50% {
              transform: scale(2, 2);
            }
            100% {
              transform: scale(1, 1);
            }
          }

          .overlay-text {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            color: white;
            font-size: 30px;
            text-align: center;
            width: 80%;
            text-shadow:  1px 1px 2px black,
            0 0 1em black,
            0 0 0.2em black;
            border: 2px solid white;
            background-color: rgba(0, 0, 0, 0.7);
            padding: 30px;
          }

          @media (max-width: 768px) {
            .overlay-text {
              font-size: 20px;
              padding: 20px;
            }
          }

          @media (max-width: 576px) {
            .overlay-text {
              font-size: 15px;
              padding: 10px;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Join;
