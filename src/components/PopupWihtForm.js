import Popup from "./Popup";

export default class PopupWihtForm extends Popup {
  constructor(popupSelector, handleSubmit) {
    super(popupSelector);
    this._handleSubmit = handleSubmit;
    this._element = this._popup.querySelector('.popup__form')
    this._inputList = Array.from(this._element.querySelectorAll('.popup__field'));
    this._buttonPopup = this._element.querySelector('.popup__submit-button');
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
    this._popup.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._handleSubmit(this._getInputValues())
    });
  }

  close = () => {
    super.close();
    this._element.reset();
  }
}