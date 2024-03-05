import React from "react";
import { useParams } from "react-router-dom";

const Article = () => {
  const { id } = useParams();
  return (
    <div className="container-fluid">
      <div className="my-5">{id}</div>
    </div>
  );
};

export default Article;
