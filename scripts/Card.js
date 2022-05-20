export class Card {
  constructor(item, template, handlePhotoView) {
    this._name = item.name;
    this._link = item.link;
    this._template = template;
    this._handlePhotoView = handlePhotoView;
  }
  
  _getTemplate = () => {
    const elementTemplate = document
    .querySelector(this._template)
    .content
    .querySelector('.elements-item')
    .cloneNode(true);
    
    return elementTemplate;
  }
  
  generateCard = () => {
    this._element = this._getTemplate();
    
    this._cardView = this._element.querySelector('.elements-item__img_template');
    this._cardView.src = this._link;
    this._cardView.alt = this._name;
    this._element.querySelector('.elements-item__title_template').textContent = this._name;
    
    this._setEventListeners();
    return this._element;
  }
  
  _handleDelCard = () => {
    this._element.remove();
    this._element = null;
  }
  
  _handleToggleLike = () => {
    this._cardLike.classList.toggle('elements-item__like_active');
  }
  
  _setEventListeners = () => {
    this._cardLike = this._element.querySelector('.elements-item__like');

    this._element.querySelector('.elements-item__del_card').addEventListener('click', () => {
      this._handleDelCard();
    });
    
    this._cardLike.addEventListener('click', () => {
      this._handleToggleLike();
    });

    this._cardView.addEventListener('click', () => {
      this._handlePhotoView({name: this._name, link: this._link});
    });
  }
}