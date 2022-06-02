import './index.css';
import { initialCards } from "../utils/initialCards.js";
import { config } from "../utils/config.js";
import { Card } from "../components/Card.js";
import { FormValidator } from "../components/FormValidator.js";
import Section from "../components/Section.js";
import Popup from "../components/Popup.js";
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

const cardFormValidator = new FormValidator(config, popupAddForm);
const profileFormValidator = new FormValidator(config,  popupEditForm);
const popupEdit = new Popup(popupModalWindowEdit);
const popupAddSubmit = new PopupWihtForm(popupModalWindowAdd, handleAddSubmit);
const popupEditSubmit = new PopupWihtForm(popupModalWindowEdit, handleEditSubmit);
const userInfo = new UserInfo({
  name: profName,
  info: profDescription
});
const section = new Section({
  items: initialCards,
  renderer: (item) => {
    const cardElement = generateCardElement(item);
    section.addItem(cardElement);
  }
}, listCards);

function generateCardElement(item) {
  const card = new Card(item, '.template', handleCardView);
  const cardElement = card.generateCard();
  return cardElement;
}

function handleCardView(item) {
  const popupView = new PopupWihtImage(item, popupModalWindowView);
  popupView.open();
  popupView.setEventListeners();
}

function handleEditSubmit(data) {
  userInfo.setUserInfo(data);
  popupEditSubmit.close();
  popupEdit.close();
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
  popupEditSubmit.setEventListeners();
  const data = userInfo.getUserInfo();
  
  popupName.value = data.name;
  popupDescription.value = data.info;
  profileFormValidator.resetError();
  popupEditSubmit.open();
}

cardFormValidator.enableValidation();
profileFormValidator.enableValidation();

section.renderItems();

popupEditSubmit.setEventListeners();
popupAddSubmit.setEventListeners();

buttonOpenPopupEdit.addEventListener('click', handleOpenPopupEdit);
buttonOpenPopupAdd.addEventListener('click', handleOpenPopupAdd);
