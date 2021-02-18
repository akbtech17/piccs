// ImageList.js
import React from "react";
import "./ImageList.css";
import ImageCard from "./ImageCard";

const ImageList = (props) => {
  const images = props.images.map((image) => {
    return (
      // <img key={image.id} src={image.urls.regular} alt={image.description} />
      <ImageCard key={image.id} image={image} />
    );
  });

  return <div className="image-list">{images}</div>;
};

export default ImageList;
