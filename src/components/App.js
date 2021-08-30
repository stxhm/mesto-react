import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import EditAvatarPopup from './EditAvatarPopup';
import EditProfilePopup from './EditProfilePopup';
import AddPlacePopup from './AddPlacePopup';
import ConfirmPopup from './ConfirmPopup';
import ImagePopup from './ImagePopup';

function App() {
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
  const [isConfirmPopupOpen, setConfirmPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({name: '', link: ''});

  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(!isEditAvatarPopupOpen);
  }

  function handleEditProfileClick() {
    setEditProfilePopupOpen(!isEditProfilePopupOpen);
  }

  function handleAddPlaceClick() {
    setAddPlacePopupOpen(!isAddPlacePopupOpen);
  }

  function closeAllPopups() {
    setEditAvatarPopupOpen(false);
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setSelectedCard({name: '', link: ''});
    setConfirmPopupOpen(false);
  }

  console.log(selectedCard);

  return (
    <div className="page">
      <Header />
      <Main 
        onEditAvatar={handleEditAvatarClick}
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onCardClick={setSelectedCard}
      />
      <EditAvatarPopup
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      />
      <EditProfilePopup
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      />
      <AddPlacePopup
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
      />
      <ConfirmPopup
        isOpen={isConfirmPopupOpen}
        onClose={closeAllPopups}
        title="Вы уверены?"
        buttonText="Да"
      />
      <ImagePopup
        card={selectedCard}
        onClose={closeAllPopups}
      />
      <Footer />
    </div>
  );
}

export default App;
