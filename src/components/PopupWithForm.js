function PopupWithForm(props) {
  return (
    <div className={`popup popup_type_${props.name} ${props.isOpen ? 'popup_opened' : ''}`}>
      <div className="popup__container">
        <button type="button" className="popup__close" aria-label="закрыть попап" onClick={props.onClose}></button>
        <h2 className="popup__title">{props.title}</h2>
        <form onSubmit={props.onSubmit} className="popup__form" name={props.name} noValidate>
          {props.children}
          <button className="popup__button" type="submit">{props.submitText}</button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;