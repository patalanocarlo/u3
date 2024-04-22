import React, { useState } from 'react';
import './App.css';
import FormGroup from "./componentss/Formgroup"
import Section from './componentss/Section';
import Navbar from './componentss/Navbar';
import ButtonComponent from './componentss/ButtonComponent';
import ImageComponent from './componentss/ImageComponent';
import image from "./componentss/tavole.jpg"
import Modal from './componentss/Modal';

function App() {
  
  const [isModalOpen, setIsModalOpen] = useState(false); 


  const openModal = () => {
    setIsModalOpen(true);
  };

 
  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
 <div className='app' style={{backgroundColor:"grey"}}>
  
  <Navbar/>
   <Section openModal={openModal}     />
   <FormGroup id="nome" label="nome" placeholder="inserisci il nome"  />
   <FormGroup id="surname" label="cognome" placeholder="inserisci il cognome"  />
   <FormGroup id="email" label="e-mail" placeholder="inserisci la tua e-mail"  />
   <ButtonComponent text="Clicca qui"/>
   <ImageComponent src={image} alt="Descrizione dell'immagine" />
   {isModalOpen && ( 
        <Modal closeModal={closeModal}>
          <ImageComponent src={image} alt="Descrizione dell'immagine" />
          <h2>Tavoli</h2>
          <p>Immagine di un tavolo e delle sedie</p>
        </Modal>
      )}
 
 
 </div>
      
    
  );
}

export default App;
