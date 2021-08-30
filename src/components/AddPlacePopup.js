import React from 'react'
import PopupWithForm from './PopupWithForm';

function AddPlacePopup({isOpen, onClose}) {

  return (
    <PopupWithForm
      name="newcard"
      title="Новое место"
      submitText="Создать"
      isOpen={isOpen}
      onClose={onClose}
    >
      <input
        className="popup__input popup__input_type_card-name"
        id="name-card"
        type="text"
        name="name"
        placeholder="Название"
        minLength="2"
        maxLength="30"
        required
      />
      <span className="popup__error popup__error_hidden" id="name-card-error"></span>
      <input
        className="popup__input popup__input_type_link"
        id="link"
        type="url"
        name="link"
        placeholder="Ссылка на картинку"
        required
      />
      <span className="popup__error popup__error_hidden" id="link-error"></span>
    </PopupWithForm>
  );
}

export default AddPlacePopup;