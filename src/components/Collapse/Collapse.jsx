//IMPORT
import React, { useState } from 'react';

export default function Collapse({ title, content }) {

  const [isOpen, setIsOpen] = useState(false);

  const openCloseCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (

    // Création de la <div> pour le collapse -> Open si besoin
    <div className="collapse">

      <div onClick={openCloseCollapse} className={`collapse-title ${isOpen ? 'open' : ''}`}>
        {title}
      </div>

      <div className={`collapse-content ${isOpen ? 'animated' : 'hidden'}`}>
        {content}
      </div>

    </div>
  );
}
