import React from "react";
import ImageUploader from "../imageUploader";
import "./style.css";

const AddPhotos = (props) => {
  return (
      <ImageUploader setPhoto={props.setPhoto}>
        <button type="button" className="AddPhotos__button">
          <i className="fas fa-camera"></i>
        </button>
      </ImageUploader>
  );
};

export default AddPhotos;
