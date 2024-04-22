import React from 'react';
import './Section.css'; 
import photo from "./museum.jpg"

function Section({ openModal }) {
  return (
    <section className="section" onClick={openModal}>
      <div className="container">
        <div className="content">
          <div className="image-container">
         <img src={photo} alt="immagine" className='photo' />
          </div>
          <div className="text-container">
            <h2>Paesaggio nebbioso</h2>
            <p>Un bellissimo paesaggio di montagna</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section;