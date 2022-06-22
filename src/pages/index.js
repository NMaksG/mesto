import './index.css';
// import { initialCards } from "../utils/initialCards.js";
import { config } from "../utils/config.js";
import { Card } from "../components/Card.js";
import { FormValidator } from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWihtImage from "../components/PopupWihtImage.js";
import UserInfo from "../components/UserInfo.js";
import PopupWihtForm from "../components/PopupWihtForm.js";
import {
  popupModalWindowEdit,
  popupEditForm,
  buttonOpenPopupEdit,
  popupName,
  popupDescription,
  profName,
  profDescription,
  profAvatar,
  popupModalWindowEditAvatar,
  popupAvatarForm,
  buttonOpenPopupEditAvatar,
  popupModalWindowAdd,
  popupAddForm,
  buttonOpenPopupAdd,
  popupModalWindowView,
  listCards,
  popupModalWindowADel,
} from "../utils/constants.js"
import Api from '../components/Api';
import PopupWithConfirmation from '../components/PopupWithConfirmation';

let myID = null;

const cardFormValidator = new FormValidator(config, popupAddForm);
const profileFormValidator = new FormValidator(config,  popupEditForm);
const avatarFormValidator = new FormValidator(config,  popupAvatarForm);
const popupAddSubmit = new PopupWihtForm(popupModalWindowAdd, handleAddSubmit);
const popupEditSubmit = new PopupWihtForm(popupModalWindowEdit, handleEditSubmit);
const popupEditAvatarSubmit = new PopupWihtForm(popupModalWindowEditAvatar, handleEditAvatarSubmit);
const popupView = new PopupWihtImage(popupModalWindowView);
const popupDelCards = new PopupWithConfirmation(popupModalWindowADel);
const section = new Section(
  (item) => {
    const cardElement = generateCardElement(item);
    section.addItem(cardElement);
  }, listCards);
const userInfo = new UserInfo({
  name: profName,
  info: profDescription,
  avatar: profAvatar
});
const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-43',
  headers: {
    authorization: '2da19b5e-259f-4a92-b11d-fa94b554e063',
    'Content-Type': 'application/json'
  }
}); 

Promise.all([api.getUserInfo(), api.getInitialCards()])
  .then(([userProf, cards]) => {
    myID = userProf._id;
    section.renderItems(cards);
    userInfo.setUserInfo(userProf.name, userProf.about);
    userInfo.setAvatar(userProf.avatar);
  })
  .catch((err) => {
    console.log(err);
  });
  
  function handleEditSubmit(data) {
    popupEditSubmit.renderLoading(true, "Сохранить", "Сохранение...");
    api.setUserInfo(data)
    .then((result) => {
      userInfo.setUserInfo(result.name, result.about);
    })
  .catch(err => {
    console.log(err)
  })
  .finally(() => {
    popupEditSubmit.renderLoading(false, "Сохранить", "Сохранение...");
  })
  popupEditSubmit.close();
}

function handleEditAvatarSubmit(data) {
  popupEditAvatarSubmit.renderLoading(true, "Создать", "Сохранение...");
  api.setAvatar(data.link)
  .then((result) => {
    userInfo.setAvatar(result.avatar);
  })
  .catch(err => {
    console.log(err)
  })
  .finally(() => {
    popupEditAvatarSubmit.renderLoading(false, "Сохранить", "Сохранение...");
  })
  popupEditAvatarSubmit.close();
}

function handleAddSubmit(data) {
  popupAddSubmit.renderLoading(true, "Создать", "Сохранение...");
  api.addCards(data)
  .then((result) => {
    const cardElement = generateCardElement(result);
    listCards.prepend(cardElement);
  })
  .catch(err => {
    console.log(err)
  })
  .finally(() => {
    popupAddSubmit.renderLoading(false, "Создать", "Сохранение...");
  })
  popupAddSubmit.close();
}

function generateCardElement(item) {
  const card = new Card(item, '.template', handleCardView, handleOpenPopupDelCard, myID, handleLikeCard, handleDeleteLikeCard);
  const cardElement = card.generateCard();
  return cardElement;
}

function handleOpenPopupDelCard(card) {
    popupDelCards.open();
    popupDelCards.delCard(() => {
    api.delCard(card)
    .then(() => {
      card.handleDelCard();
      popupDelCards.close();
    })
    .catch(err => {
      console.log(err)
    })})
}

function handleLikeCard(card, isLike) {
  api.setLikeCard(card, isLike)
  .then((result) => {
    card.handleLikeCard(result)
  })
  .catch((err) => {
    console.log(err)
  });
}

function handleDeleteLikeCard(card, isLike) {
  api.setLikeCard(card, isLike)
  .then((result) => {
    card.handleDeleteLike(result)
  })
  .catch((err) => {
    console.log(err)
  });
}

function handleCardView(item) {
  popupView.open(item);
}

function handleOpenPopupAdd() {
  cardFormValidator.resetError();
  popupAddSubmit.open();
}

function handleOpenPopupEdit() {
  const data = userInfo.getUserInfo();
  
  popupName.value = data.name;
  popupDescription.value = data.info;
  profileFormValidator.resetError();
  popupEditSubmit.open();
}

function handleOpenPopupEditAvatar() {
  avatarFormValidator.resetError();
  popupEditAvatarSubmit.open();
}

cardFormValidator.enableValidation();
profileFormValidator.enableValidation();
avatarFormValidator.enableValidation();

popupView.setEventListeners();
popupEditSubmit.setEventListeners();
popupAddSubmit.setEventListeners();
popupEditAvatarSubmit.setEventListeners();
popupDelCards.setEventListeners();

buttonOpenPopupEdit.addEventListener('click', handleOpenPopupEdit);
buttonOpenPopupAdd.addEventListener('click', handleOpenPopupAdd);
buttonOpenPopupEditAvatar.addEventListener('click', handleOpenPopupEditAvatar);
