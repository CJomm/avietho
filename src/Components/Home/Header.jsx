import React from "react";
import logo from "../../assets/whitelogo.jpg";
import imghead from "../../assets/imghead.png";

const Header = () => {
  const preventDefault = (event) => {
    event.preventDefault();
  };

  return (
    <header
      className="d-flex flex-column align-items-center"
      style={{
        position: "relative",
        height: "50vh",
        color: "#fff",
        paddingTop: "450px",
      }}
      onContextMenu={preventDefault}
    >
      <img
        src={logo}
        alt="Logo"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "contain",
          pointerEvents: "none",
          paddingTop: "20px",
        }}
      />
    </header>
  );
};

export default Header;
