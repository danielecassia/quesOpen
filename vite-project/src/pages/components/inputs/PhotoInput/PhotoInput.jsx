import React, {useCallback, useEffect, useState} from 'react';
import {useDropzone} from 'react-dropzone';

import './PhotoInput.scss';
import defaultUser from '../../../../assets/imgs/default-user-icon.jpg';

import camera from '../../../../assets/icons/camera.svg';

export default function PhotoInput(props) {
  const images = require.context('../../../../upload/', true);
  const [photoPreview, setPhotoPreview] = useState('');

  const onDrop = useCallback((acceptedFiles) => {
    if (acceptedFiles.length == 1) {
      const file = acceptedFiles[0];
      if (['image/jpeg', 'image/png'].includes(file.type)) {
        props.setFile(file);
      }
      console.log(file);
    }
  }, []);

  useEffect(() =>{
    if (props.file instanceof File) {
      URL.revokeObjectURL(photoPreview);
      setPhotoPreview(URL.createObjectURL(props.file));
    } else if (props.file != '') {
      setPhotoPreview(images('./' + props.file).default);
    }
  }, [props.file]);

  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop});

  return (
    <div {...getRootProps()} className="inputPhoto">
      <input {...getInputProps()} />
      {
        isDragActive ?
          <>
            <img src={camera} className="camera"/>
            <div className="preview">
              <img src={photoPreview ? photoPreview :
                defaultUser}/>
            </div>
          </>:<>
            <img src={camera} className="camera"/>
            <div className="preview">
              <img src={photoPreview ? photoPreview :
                defaultUser}/>
            </div>
          </>
      }
    </div>
  );
};
