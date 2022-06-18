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
  listCards
} from "../utils/constants.js"
import Api from '../components/Api';

const cardFormValidator = new FormValidator(config, popupAddForm);
const profileFormValidator = new FormValidator(config,  popupEditForm);
const avatarFormValidator = new FormValidator(config,  popupAvatarForm);
const popupAddSubmit = new PopupWihtForm(popupModalWindowAdd, handleAddSubmit);
const popupEditSubmit = new PopupWihtForm(popupModalWindowEdit, handleEditSubmit);
const popupEditAvatarSubmit = new PopupWihtForm(popupModalWindowEditAvatar, handleEditAvatarSubmit);
const popupView = new PopupWihtImage(popupModalWindowView);
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

api.getInitialCards()
  .then((items) => {
    const section = new Section({
      items,
      renderer: (item) => {
        const cardElement = generateCardElement(item);
        section.addItem(cardElement);
      }
    }, listCards);
    section.renderItems();
  })
  .catch((err) => {
    console.log(err);
  });

api.getUserInfo()
.then((result) => {
  userInfo.setUserInfo(result.name, result.about);
  userInfo.setAvatar(result.avatar);
})
.catch(err => {
  console.log(err)
});

function generateCardElement(item) {
  const card = new Card(item, '.template', handleCardView);
  const cardElement = card.generateCard();
  return cardElement;
}

function handleEditSubmit(data) {
  api.setUserInfo(data)
  .then((result) => {
    userInfo.setUserInfo(result.name, result.about);
  })
  .catch(err => {
    console.log(err)
  })
  popupEditSubmit.close();
}

function handleEditAvatarSubmit(data) {
  api.setAvatar(data.link)
  .then((result) => {
    userInfo.setAvatar(result.avatar);
  })
  .catch(err => {
    console.log(err)
  })
  popupEditAvatarSubmit.close();
}

function handleAddSubmit(data) {
  api.addCards(data)
  .then((result) => {
    const cardNewTitle = data.name;
    const cardNewLink = data.link;
    
    const cardElement = generateCardElement({name: cardNewTitle, link: cardNewLink});
    listCards.prepend(cardElement);
  })
  .catch(err => {
    console.log(err)
  })
  popupAddSubmit.close();
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

buttonOpenPopupEdit.addEventListener('click', handleOpenPopupEdit);
buttonOpenPopupAdd.addEventListener('click', handleOpenPopupAdd);
buttonOpenPopupEditAvatar.addEventListener('click', handleOpenPopupEditAvatar);
