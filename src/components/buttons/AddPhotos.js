import React from "react";

import ImageUploader from "../imageUploader";
import "./style.css";

const AddPhotos = () => {
  return (
    <div>
      <p>Ladda upp foton:</p>
      <ImageUploader>
        <button className="AddPhotos__button">
          <i class="far fa-images" />
        </button>
      </ImageUploader>
    </div>
  );
};

export default AddPhotos;
