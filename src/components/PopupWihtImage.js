import Popup from "./Popup";

export default class PopupWihtImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popupImgView = this._popup.querySelector('.popup__img_view');
    this._popupTitleView = this._popup.querySelector('.popup__title_view');
  }
  
  open = (item) => {
    this._popupImgView.src = item.link;
    this._popupImgView.alt = item.name;
    this._popupTitleView.textContent = item.name;
    
    super.open();
  }
}