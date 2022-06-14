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
  popupModalWindowAdd,
  popupAddForm,
  buttonOpenPopupAdd,
  popupModalWindowView,
  listCards
} from "../utils/constants.js"
import Api from '../components/Api';

const cardFormValidator = new FormValidator(config, popupAddForm);
const profileFormValidator = new FormValidator(config,  popupEditForm);
const popupAddSubmit = new PopupWihtForm(popupModalWindowAdd, handleAddSubmit);
const popupEditSubmit = new PopupWihtForm(popupModalWindowEdit, handleEditSubmit);
const popupView = new PopupWihtImage(popupModalWindowView);
const userInfo = new UserInfo({
  name: profName,
  info: profDescription
});
// const section = new Section({
//   items: initialCards,
//   renderer: (item) => {
//     const cardElement = generateCardElement(item);
//     section.addItem(cardElement);
//   }
// }, listCards);

function generateCardElement(item) {
  const card = new Card(item, '.template', handleCardView);
  const cardElement = card.generateCard();
  return cardElement;
}

function handleCardView(item) {
  popupView.open(item);
}

function handleEditSubmit(data) {
  userInfo.setUserInfo(data);
  popupEditSubmit.close();
}

function handleAddSubmit(data) {
  const cardNewTitle = data.name;
  const cardNewLink = data.link;
  
  const cardElement = generateCardElement({name: cardNewTitle, link: cardNewLink});
  listCards.prepend(cardElement);
  popupAddSubmit.close();
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


const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-43',
  headers: {
    authorization: '2da19b5e-259f-4a92-b11d-fa94b554e063',
    'Content-Type': 'application/json'
  }
}); 

api.getInitialCards()
  .then((items) => {
    console.log(items);
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
  console.log(result)
})
.catch(err => {
  console.log(err)
})


cardFormValidator.enableValidation();
profileFormValidator.enableValidation();

// section.renderItems();

popupView.setEventListeners();
popupEditSubmit.setEventListeners();
popupAddSubmit.setEventListeners();

buttonOpenPopupEdit.addEventListener('click', handleOpenPopupEdit);
buttonOpenPopupAdd.addEventListener('click', handleOpenPopupAdd);