import React, { Component } from 'react';
// import { connect } from 'react-redux';

import './style.css'
import ImageUploader from '../imageUploader'

export default class AddPhotos extends Component {
    render() {  
      return (
        <div>
            <p>Ladda upp foton:</p>
            <ImageUploader>
            <button className="uploadImageButton">
                <i class="far fa-images"></i>
            </button>
            </ImageUploader>
        </div>
      );
    }

}