export default class Popup {
  constructor(popupSelector) {
    this._popup = popupSelector;
    this._buttonClose = this._popup.querySelector('.popup__close');
    this._popupActive = 'popup_active';
  }

  open() {
    this._popup.classList.add(this._popupActive);
  }

  close() {
    this._popup.classList.remove(this._popupActive);
    document.removeEventListener('keydown', this._handleEscClose);
  }

  _handleEscClose = (e) => {
    if (e.key === 'Escape') {
      this.close(this._popup);
    }
  }

  _handleOverlayClose = (e) => {
    if (e.target === e.currentTarget) {
      this.close(this._popup);
    }
  }

  setEventListeners() {
    this._buttonClose.addEventListener('click', () => {
      this.close();
    });
    
    document.addEventListener('keydown', this._handleEscClose);
    this._popup.addEventListener('mousedown', this._handleOverlayClose);
  }
}