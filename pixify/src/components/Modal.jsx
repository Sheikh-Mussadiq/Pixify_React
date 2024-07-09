// src/Modal.js
import React from 'react';
import '../Modal.css';
  
const Modal = ({ open, onClose, project }) => {
  if (!open) return null;

  const projectContent = {
    "Web Design": "Web Design Projects Content",
    "App Design": "App Design Projects Content",
    "Graphic Design": "Graphic Design Projects Content"
  };

  return (
    <div onClick={onClose} className='overlay'>
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className='modalContainer'
      >
        <div className='modalRight'>
          <p className='closeBtn' onClick={onClose}>
            X
          </p>
          <div className='content'>
            <h1>{project} Projects</h1>
            <p>{projectContent[project]}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
