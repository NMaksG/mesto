export class Card {
  constructor(item, template, handlePhotoView, handleOpenPopupDelCard, myID, handleLikeCard, handleDeleteLikeCard) {
    this._name = item.name;
    this._link = item.link;
    this._item = item;
    this._myID = myID;
    this._userID = item.owner._id;
    this._template = template;
    this._handlePhotoView = handlePhotoView;
    this._handleOpenPopupDelCard = handleOpenPopupDelCard;
    this._handleLikeCard = handleLikeCard;
    this._handleDeleteLikeCard = handleDeleteLikeCard;
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
    this._buttonDelCard = this._element.querySelector('.elements-item__del_card');
    this._cardLike = this._element.querySelector('.elements-item__like');
    
    if (this._userID !== this._myID) {
      this._buttonDelCard.classList.add('elements-item__del-disable');
    }
    
    this._switchLikes();
    this._viewNumbLike(this._item);
    
    this._setEventListeners();
    return this._element;
  }
  
  _isLike = () => this._item.likes.some((item) => item._id === this._myID);

  _handleSwitchLikes = () => {
    this._isLike() ? this._handleDeleteLikeCard(this, this._isLike()) : this._handleLikeCard(this, this._isLike());
  }

  _viewNumbLike(item) {
    this._item.likes = item.likes;
    this._element.querySelector('.elements-item__like-numb').textContent = this._item.likes.length;
  }

  handleLikeCard(item) {
    this._cardLike.classList.add("elements-item__like_active");
    this._viewNumbLike(item);
  }

  handleDeleteLike(item) {
    this._cardLike.classList.remove("elements-item__like_active");
    this._viewNumbLike(item);
  }


  _switchLikes() {
    if (this._isLike()) {
      this.handleLikeCard(this._item);
    }
  }
    
    handleDelCard = () => {
      this._element.remove();
      this._element = null;
  }
  
  _setEventListeners = () => {

    this._element.querySelector('.elements-item__del_card').addEventListener('click', () => {
      this._handleOpenPopupDelCard(this);
    });
    
    this._cardLike.addEventListener('click',
      this._handleSwitchLikes
    );

    this._cardView.addEventListener('click', () => {
      this._handlePhotoView({name: this._name, link: this._link});
    });
  }
}