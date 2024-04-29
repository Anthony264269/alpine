import React from 'react';
import "./section-two.css";
import videoSource from '../../images/video/headervid.mp4';

function SectionTwo() {
  return (
    <div className="sectionTwo">
      <video autoPlay="autoplay" loop="loop" muted className="videoBackground">
        <source src={videoSource} type="video/mp4" />
        Votre navigateur ne supporte pas la vidéo.
      </video>
    </div>
  );
}

export default SectionTwo;
