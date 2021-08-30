import React from 'react';
import api from '../utils/api.js';
import Card from './Card';

function Main({onEditAvatar, onEditProfile, onAddPlace, onCardClick}) {
  const [userName, setUserName] = React.useState('');
  const [userDescription, setUserDescription] = React.useState('');
  const [userAvatar, setUserAvatar] = React.useState('');
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api.getUserInfo()
      .then((userInfo) => {
        setUserName(userInfo.name);
        setUserDescription(userInfo.about);
        setUserAvatar(userInfo.avatar);
      })
      .catch((err) => console.log(err));
  }, []);

  React.useEffect(() => {
    api.getCards()
      .then((cards) => {
        setCards(cards);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <main className="content">
    <section className="profile">
      <img src={userAvatar} alt="аватар" className="profile__avatar"/>
      <button 
        className="profile__avatar-button" 
        onClick={onEditAvatar}
      ></button>
      <div className="profile__info">
        <h1 className="profile__name">{userName || 'Jacques Cousteau'}</h1>
        <button 
          className="profile__edit" 
          type="button" 
          onClick={onEditProfile}
        ></button>
        <p className="profile__about">{userDescription || 'Sailor, researcher'}</p>
      </div>
      <button 
        className="profile__add-button" 
        type="button" 
        onClick={onAddPlace}
      ></button>
    </section>
    <ul className="cards">
      {cards.map((card) => (
        <Card
          key={card._id}
          card={card}
          onCardClick={onCardClick}
        />
      ))}
    </ul>
  </main>
  )
}

export default Main;