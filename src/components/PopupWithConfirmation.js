import Popup from "./Popup";

export default class PopupWithConfirmation extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._buttonDel = this._popup.querySelector('.popup__form');
  }

  delCard = (action) => {
    this._handleSubmit = action;
 }

  setEventListeners() {
    super.setEventListeners();
    this._buttonDel.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._handleSubmit();
    });
  }
}