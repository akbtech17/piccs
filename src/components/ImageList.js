// ImageList.js
import React from "react";
import "./ImageList.css";

const ImageList = (props) => {
  const images = props.images.map((image) => {
    return (
      <img key={image.id} src={image.urls.regular} alt={image.description} />
    );
  });

  return <div className="image-list">{images}</div>;
};

export default ImageList;
