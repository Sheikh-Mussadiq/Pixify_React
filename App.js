// src/App.js
import React, { useState } from 'react';
import './App.css'; // Global CSS
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Features from './components/Features';
import Footer from './components/Footer';
import WebDesignModal from './components/WebDesignModal';
import AppDesignModal from './components/VideoEditingModal';
import GraphicDesignModal from './components/ThumbanilDesignModal';
function App() {
  const [webDesignOpen, setWebDesignOpen] = useState(false);
  const [appDesignOpen, setAppDesignOpen] = useState(false);
  const [graphicDesignOpen, setGraphicDesignOpen] = useState(false);

  const handleOpenModal = (modalType) => {
    if (modalType === 'Web Design') setWebDesignOpen(true);
    if (modalType === 'Video Editing') setAppDesignOpen(true);
    if (modalType === 'Thumbanail Design') setGraphicDesignOpen(true);
  };

  const handleCloseModal = (modalType) => {
    if (modalType === 'Web Design') setWebDesignOpen(false);
    if (modalType === 'Video Editing') setAppDesignOpen(false);
    if (modalType === 'Thumbanail Design') setGraphicDesignOpen(false);
  };

  return (
    <div className="App">
      <Header />
      <Hero />
      <Services onViewProjects={handleOpenModal} />
      <WebDesignModal open={webDesignOpen} onClose={() => handleCloseModal('Web Design')} />
      <AppDesignModal open={appDesignOpen} onClose={() => handleCloseModal('Video Editing')} />
      <GraphicDesignModal open={graphicDesignOpen} onClose={() => handleCloseModal('Thumbanail Design')} />
      <Features />
      <Footer />
    </div>
  );
}


export default App;
