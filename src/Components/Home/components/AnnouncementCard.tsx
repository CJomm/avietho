import React from "react";
import { AnnouncementInterface } from "./Announcements";

export const lengthRuler = (data: AnnouncementInterface[]) => {
  return data.length === 0;
};

const AnnouncementCard = () => {
  return (
    <div className="card" style={{ width: "20rem" }}>
      <img
        className="card-img-top"
        src="https://t4.ftcdn.net/jpg/01/43/42/83/360_F_143428338_gcxw3Jcd0tJpkvvb53pfEztwtU9sxsgT.jpg"
        alt="djashdnkjajhksjdcbahksj"
      />
      <div className="card-body text-center">
        <p>date</p>
        <h3>title</h3>
        <p className="card-text">content</p>
        <a href="#" className="btn btn-dark">
          Read more
        </a>
      </div>
    </div>
  );
};

export default AnnouncementCard;
