import React from "react";

import ImageUploader from "../imageUploader";
import "./style.css";

const AddPhotos = () => {
  return (
    <div>
      <ImageUploader>
        <button className="AddPhotos__button">
          <i className="fas fa-camera"></i>
        </button>
        <p>Lägg till foto</p>
      </ImageUploader>
    </div>
  );
};

export default AddPhotos;
