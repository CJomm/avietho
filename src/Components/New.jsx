import React from "react";

const New = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        {Array(100)
          .fill(0)
          .map((item, index) => (
            <div className="col col-12 border">{index}</div>
          ))}
      </div>
    </div>
  );
};

export default New;
