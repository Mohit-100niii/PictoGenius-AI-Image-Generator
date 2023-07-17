import React from "react";
import "../index.css";

const DisplayPost = ({ post }) => {
  return (
    <div className="post ">
      <img className="post-image" src={post.image} alt={post.prompt} />
    </div>
  );
};

export default DisplayPost;



