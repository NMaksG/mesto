export class FormValidator {
  constructor(data, formElementPopup) {
    this._inputSelector = data.inputSelector;
    this._submitButtonSelector = data.submitButtonSelector;
    this._inactiveButtonClass = data.inactiveButtonClass;
    this._inputErrorClass = data.inputErrorClass;
    this._errorClass = data.errorClass;
    this._formElementPopup = formElementPopup;
    this._inputList = Array.from(this._formElementPopup.querySelectorAll(this._inputSelector));
    this._buttonElement = this._formElementPopup.querySelector(this._submitButtonSelector);
  }

  _showInputError = (inputElement, errorMessage) => {
    const errorElement = this._formElementPopup.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.add(this._inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._errorClass);
  }
  
  _hideInputError = (inputElement) => {
    const errorElement = this._formElementPopup.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.remove(this._inputErrorClass);
    errorElement.classList.remove(this._errorClass);
    errorElement.textContent = '';
  }
  
  resetError() {
    this._inputList.forEach((inputElement) => {
    this._hideInputError(inputElement);
    });
      this._toggleButtonState();
  }
  
  _checkInputValidity = (inputElement) => {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(inputElement);
    }
  }
  
  _setEventListeners = () => {
    this._toggleButtonState();
    
    this._inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', () => {
        this._checkInputValidity(inputElement);
        
        this._toggleButtonState();
      });
    });
  }
  
  enableValidation = () => {
    this._formElementPopup.addEventListener('submit', (evt) => {
            evt.preventDefault();
    });
      this._setEventListeners();
  }
  
  _toggleButtonState = () => {
    if (!this._formElementPopup.checkValidity()) {
      this._buttonElement.classList.add(this._inactiveButtonClass);
      this._buttonElement.setAttribute("disabled", "disabled");
    } else {
      this._buttonElement.classList.remove(this._inactiveButtonClass);
      this._buttonElement.removeAttribute("disabled");
    }
  }
}