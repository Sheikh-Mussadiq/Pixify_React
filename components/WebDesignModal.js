// src/WebDesignModal.js
import React from 'react';
import './Modal.css';

const WebDesignModal = ({ open, onClose }) => {
  if (!open) return null;

  return (
    <div onClick={onClose} className='overlay'>
      <div onClick={(e) => e.stopPropagation()} className='modalContainer'>
        <p className='closeBtn' onClick={onClose}>X</p>
        <div className='content'>
          <img src={require('../images/web_design.gif')} alt='Web Design Main' />
          <h1>Web Designing</h1>
          <p className='modal_text_P'> Crafting Exceptional Websites for Unmatched Success </p>
          <div className='projectsGrid'>
            <div className='projectCard'>
              <img src='path_to_project_1_image' alt='Project 1' />
              <p>Project 1</p>
            </div>
            <div className='projectCard'>
              <img src='path_to_project_2_image' alt='Project 2' />
              <p>Project 2</p>
            </div>
            <div className='projectCard'>
              <img src='path_to_project_3_image' alt='Project 3' />
              <p>Project 3</p>
            </div>
            <div className='projectCard'>
              <img src='path_to_project_4_image' alt='Project 4' />
              <p>Project 4</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebDesignModal;
