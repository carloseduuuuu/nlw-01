import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { FiUpload } from 'react-icons/fi'

import './styles.css'

interface Props {
  onFileUploaded: (file: File) => void
}

const Dropzone: React.FC<Props> = ({ onFileUploaded } ) => {
  const [selectedFileUrl, setSelectedFileUrl] = useState('');

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0];

    const fileUrl = URL.createObjectURL(file)

    setSelectedFileUrl(fileUrl)
    onFileUploaded(file);
  }, [onFileUploaded]);

  const { getRootProps, getInputProps } = useDropzone({ 
    onDrop,
    accept: {
      'image/*': []
    }
  });

  return (
    <div className="dropzone" {...getRootProps()} style={{ border: '2px dashed #cccccc', padding: '20px', textAlign: 'center' }}>
      <input {...getInputProps()} accept="image/*" />

      { selectedFileUrl
          ? <img src={selectedFileUrl} alt="Point thumbnail" />
          : (
            <p>
              <FiUpload />
              Imagem do estabelecimento
            </p>
          )
      }
    </div>
  );
}

export default Dropzone;
