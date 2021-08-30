import React from 'react';
import PopupWithForm from './PopupWithForm';

function ConfirmPopup({title, buttonText, isOpen, onClose, onSubmit}) {
  return (
    <PopupWithForm
      name="confirm"
      title={title}
      buttonText={buttonText}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={onSubmit}
    >
    </PopupWithForm>
  );
}

export default ConfirmPopup;