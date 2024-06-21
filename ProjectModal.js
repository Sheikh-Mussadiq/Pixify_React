// src/ProjectModal.js
import React from 'react';
import './App.css';

const ProjectModal = ({ open, onClose, project, projectDetails }) => {
  if (!open) return null;

  return (
    <div onClick={onClose} className='overlay'>
      <div
        onClick={(e) => e.stopPropagation()}
        className='modalContainer'
      >
        <p className='closeBtn' onClick={onClose}>
          X
        </p>
        <div className='content'>
          <img src={projectDetails.mainImage} alt={`${project} main`} />
          <h1>{project}</h1>
          <div className='projectsGrid'>
            {projectDetails.projects.map((proj, index) => (
              <div key={index} className='projectCard'>
                <img src={proj.image} alt={proj.title} />
                <p>{proj.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
