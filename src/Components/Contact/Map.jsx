import React from "react";
import "../../Components/Contact/Map.css";

const Map = () => {
  return (
    <div className="map">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3864.017101830387!2d121.0266115!3d14.4261777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397d1ce681dedef%3A0x85cad0eddb2b0815!2sAdmiralty%20Building%2C%20Ayala%20Alabang%2C%20Muntinlupa%2C%20Metro%20Manila!5e0!3m2!1sen!2sph!4v1709110577232!5m2!1sen!2sph "
        asyncdefer="true"
        width="600"
        height="450"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Map;
