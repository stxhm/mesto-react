import React from 'react'
import PopupWithForm from './PopupWithForm';

function EditAvatarPopup({isOpen, onClose}) {

  return (
    <PopupWithForm
      name="editavatar"
      title="Обновить аватар"
      submitText="Сохранить"
      isOpen={isOpen}
      onClose={onClose}
    >
      <input
        className="popup__input popup__input_type_link"
        type="url"
        name="link"
        autoComplete="off"
        id="avatarlink"
        placeholder="Ссылка на картинку"
        required
      />
      <span className="popup__error popup__error_hidden" id="avatarlink-error"></span>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;