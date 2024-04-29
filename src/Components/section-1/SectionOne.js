import React from 'react';
import './section-one.css';

function SectionOne() {
  return (
    <div className="sectionOne d-flex justify-content-center align-items-center"> 
      <div className="container">
        <div className="row">
          <div className="col-md-6 background"></div>
          <div className="col-md-6 text-right d-flex justify-content-center align-items-center">  
            <div className="card"> 
              <h1 className="pb-4">Alpine présente</h1>
              <h3 className="text-center">
                La nouvelle Alpine A110 incarne l'essence de l'élégance et de la
                performance, fusionnant un design iconique avec des performances de
                conduite dynamiques. Avec son châssis léger et son moteur turbo, elle
                offre une expérience de conduite exaltante, réaffirmant ainsi
                l'héritage sportif de la marque.
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionOne;
