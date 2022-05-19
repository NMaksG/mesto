import { initialCards } from "./initialCards.js";
import { config } from "./config.js";
import { Card } from "./Card.js";
import { FormValidator } from "./FormValidator.js";

const popupModalWindowEdit = document.querySelector('.popup_edit');
const buttonOpenPopupEdit = document.querySelector('.profile__edit-button');
const buttonClosePopupEdit = popupModalWindowEdit.querySelector('.popup__close');
const popupFormEdit = popupModalWindowEdit.querySelector('.popup__content');
const popupName = popupFormEdit.querySelector('.popup__field_type_name');
const popupDescription = popupFormEdit.querySelector('.popup__field_type_description');
const profName = document.querySelector('.profile__name');
const profDescription = document.querySelector('.profile__description');
const buttonOpenPopupAdd = document.querySelector('.profile__add-button');

const popupModalWindowAdd = document.querySelector('.popup_add');
const buttonClosePopupAdd = popupModalWindowAdd.querySelector('.popup__close');
const popupFormAdd = popupModalWindowAdd.querySelector('.popup__content');
const popupTitle = popupFormAdd.querySelector('.popup__field_type_title');
const popupLink = popupFormAdd.querySelector('.popup__field_type_link');

const popupModalWindowView = document.querySelector('.popup_view');
const buttonClosePopupView = popupModalWindowView.querySelector('.popup__close');
const popupTitleView = popupModalWindowView.querySelector('.popup__title_view');
const popupImgView = popupModalWindowView.querySelector('.popup__img_view');

const listCards = document.querySelector('.elements__element_template');

const renderElements = () => {
  listCards.innerHTML = '';
  initialCards.forEach((item) => {
    
    const card = new Card(item, '.template', handleCardView);
    const cardElement = card.generateCard(item);
      listCards.append(cardElement);
  });
};

renderElements();

function handleAddSubmit(e) {
  e.preventDefault();
  
  const cardNewTitle = popupTitle.value;
  const cardNewLink = popupLink.value;
  const card = new Card({name: cardNewTitle, link: cardNewLink}, '.template', handleCardView);
    const cardElement = card.generateCard({name: cardNewTitle, link: cardNewLink});
      listCards.prepend(cardElement);
  
  closePopup(popupModalWindowAdd);
}

function handleCardView(item) {
  popupImgView.src = item.link;
  popupTitleView.alt = item.name;
  popupTitleView.textContent = item.name;
  openPopup(popupModalWindowView);
}

function handlePopupOverlayClose(e) {
  if (e.target === e.currentTarget) {
  closePopup(e.target);
  }
}

function handlePopupEscapeClose(e) {
  const popup = document.querySelector('.popup_active');
  if (e.key === 'Escape') {
    closePopup(popup);
    }
}

function openPopup(popupModalWindow) {
  popupModalWindow.classList.add('popup_active');

  document.addEventListener('keydown', handlePopupEscapeClose);
  popupModalWindow.addEventListener('click', handlePopupOverlayClose);
}

function closePopup(popupModalWindow) {
  popupModalWindow.classList.remove('popup_active');

  document.removeEventListener('keydown', handlePopupEscapeClose);
  popupModalWindow.removeEventListener('click', handlePopupOverlayClose);
}

function handleEditSubmit(e) {
  e.preventDefault();
  
  profName.textContent = popupName.value;
  profDescription.textContent = popupDescription.value;
  
  closePopup(popupModalWindowEdit);
}

function handleOpenPopupAdd() {
  popupTitle.value = '';
  popupLink.value = '';
  resetError(popupModalWindowAdd, config);
  openPopup(popupModalWindowAdd);
}

function handleOpenPopupEdit() {
  popupName.value = profName.textContent;
  popupDescription.value = profDescription.textContent;
  resetError(popupModalWindowEdit, config);
  openPopup(popupModalWindowEdit);
}

buttonOpenPopupEdit.addEventListener('click', handleOpenPopupEdit);
buttonOpenPopupAdd.addEventListener('click', handleOpenPopupAdd);

buttonClosePopupEdit.addEventListener('click', function () {
  closePopup(popupModalWindowEdit);
});
buttonClosePopupAdd.addEventListener('click',  function () {
  closePopup(popupModalWindowAdd);
});
buttonClosePopupView.addEventListener('click',  function () {
  closePopup(popupModalWindowView);
});

popupFormEdit.addEventListener('submit', handleEditSubmit);
popupFormAdd.addEventListener('submit', handleAddSubmit);
