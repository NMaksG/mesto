import Popup from "./Popup";

export default class PopupWihtImage extends Popup {
  constructor(item, popupSelector) {
    super(popupSelector);
    this._link = item.link;
    this._name = item.name;
  }
  
  open = () => {
    // popupImgView.src = this._link;
    // popupTitleView.alt = this._name;
    // popupTitleView.textContent = this._name;
    this._popup.querySelector('.popup__img_view').src = this._link;
    this._popup.querySelector('.popup__title_view').alt = this._name;
    this._popup.querySelector('.popup__title_view').textContent = this._name;
    
    super.open();
  }
}