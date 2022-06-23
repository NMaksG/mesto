import Popup from "./Popup";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleSubmit) {
    super(popupSelector);
    this._handleSubmit = handleSubmit;
    // this._popupForm = this._popup.querySelector('.popup__form');
    this._inputList = Array.from(this._popupForm.querySelectorAll('.popup__field'));
    this._buttonPopup = this._popupForm.querySelector('.popup__submit-button');
  }

  renderLoading = (isLoading, massInit, massLoad) => {
    if (isLoading) {
      this._buttonPopup.textContent = massLoad;
    } else {
      this._buttonPopup.textContent = massInit;
    }
  }

  _getInputValues = () => {
    this._formValues = {};
  
    this._inputList.forEach((input) => {
      this._formValues[input.name] = input.value;
    });
    
    return this._formValues;
  }

  setEventListeners = () => {
    super.setEventListeners();
    this._popupForm.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._handleSubmit(this._getInputValues())
    });
  }

  close = () => {
    super.close();
    this._popupForm.reset();
  }
}