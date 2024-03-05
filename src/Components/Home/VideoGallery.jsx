import React from "react";
import sgallery from "../../assets/testban.mov";

function VideoGallery() {
  return (
    <div style={{}}>
      <video
        style={{
          width: "100%",
          height: "auto",
          paddingTop: "0px",
        }}
        autoPlay
        loop
        controlsList="nodownload"
      >
        <source src={sgallery} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default VideoGallery;
