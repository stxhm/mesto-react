import React from 'react';

function ImagePopup({card, onClose}) {
  return (
    <div className={`popup popup-image ${card.link && 'popup_opened'}`}>
      <div className="popup-image__container">
        <button
          className="popup__close" 
          type="button" 
          onClick={onClose}></button>
        <img 
          className="popup-image__image" 
          src={card.link}
          alt={card.name}
        />
        <p className="popup-image__name">{card.name}</p>
      </div>
    </div>
  );
}

export default ImagePopup;