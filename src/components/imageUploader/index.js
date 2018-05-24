import React from 'react'
import Dropzone from 'react-dropzone'

import './style.css'
//   GraphQL
//   Important: react-dropzone doesn't manage dropped files. You need to destroy 
//   the object URL yourself whenever you don't need the preview by calling 
//   window.URL.revokeObjectURL(file.preview); to avoid memory leaks.

const ImageUploader = (props) => {
    return (
            <Dropzone className="ignore photo" onDrop={(photo) => props.setPhoto(photo)}>
                {props.children}
            </Dropzone>
    )
}
export default ImageUploader