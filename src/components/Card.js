import React from 'react';

function Card({card, onCardClick}) {
  return (
  <li className="card">
    <img 
      className="card__image" 
      src={card.link} 
      alt={card.name}
      onClick={() => onCardClick(card)}
    />
    <button 
      className="card__delete" 
      type="button"
    ></button>
    <div className="card__name">
      <h2 className="card__title">{card.name}</h2>
      <div className="card__like-container">
        <button 
          className="card__like" 
          type="button"
        ></button>
        <span className="card__like-counter">{card.likes.length}</span>
      </div>
    </div>
  </li>
  );
}

export default Card;