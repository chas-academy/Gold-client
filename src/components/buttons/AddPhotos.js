import React from "react";

import ImageUploader from "../imageUploader";
import "./style.css";

const AddPhotos = (props) => {
  return (
      <ImageUploader setPhoto={props.setPhoto}>
        <button type="button" className="AddPhotos__button">
          <i className="fas fa-camera"></i>
        </button>
        <p className="AddPhotos__text">Lägg till foto</p>
      </ImageUploader>
  );
};

export default AddPhotos;
