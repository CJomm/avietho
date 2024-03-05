import React from "react";
import twitter from "../../assets/twitter.png";
import facebook from "../../assets/facebook.png";
import instagram from "../../assets/instagram.png";

const SocialM = () => {
  const iconStyle = {
    display: "block",
    marginBottom: "10px",
  };

  return (
    <div
      style={{
        position: "fixed",
        top: "20%",
        right: "20px",
        transform: "translateY(-50%)",
      }}
    >
      {/* <div style={iconStyle}>
  <a href="https://twitter.com">
    <img
      src={twitter}
      alt="Twitter"
      style={{ width: "24px", height: "24px", color: "#1DA1F2" }}
    />
  </a>
</div> */}

      <div style={iconStyle}>
        <a href="https://www.facebook.com/aviethodigital" target="_blank">
          <img
            src={facebook}
            alt="Facebook"
            style={{
              marginRight: "-20px",
              width: "50px",
              height: "50px",
              color: "#4267B2",
            }}
          />
        </a>
      </div>

      {/*     <div style={iconStyle}>
        <a href="https://instagram.com">
          <img
            src={instagram}
            alt="Instagram"
            style={{ width: "24px", height: "24px", color: "#8a3ab9" }}
          />
        </a>
      </div>*/}
    </div>
  );
};

export default SocialM;
