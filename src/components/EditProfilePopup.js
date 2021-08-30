import React from 'react';
import PopupWithForm from './PopupWithForm';

function EditProfilePopup({isOpen, onClose}) {

  return (
    <PopupWithForm
      name="editprofile"
      title="Редактировать профиль"
      submitText="Сохранить"
      isOpen={isOpen}
      onClose={onClose}
    >
      <input 
        className="popup__input popup__input_type_name"
        id="name-profile"
        type="text"
        name="name"
        placeholder="Имя"
        minLength="2"
        maxLength="40"
        required
      />
      <span className="popup__error popup__error_hidden" id="name-profile-error"></span>
      <input
        className="popup__input popup__input_type_about" 
        id="about"
        type="text"
        name="about"
        placeholder="Описание" 
        minLength="2"
        maxLength="200"
        required
      />
      <span className="popup__error popup__error_hidden" id="about-error"></span>
    </PopupWithForm>
  );
}

export default EditProfilePopup;