const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];
const popupModalWindow = document.querySelector('.popup');
const popupModalWindowEdit = document.querySelector('.popup_edit');
const buttonOpenPopupEdit = document.querySelector('.profile__edit-button');
const buttonClosePopupEdit = popupModalWindowEdit.querySelector('.popup__close');
const popupForm = document.querySelector('.popup__content');
const popupName = popupForm.querySelector('.popup__field_type_name');
const popupDescription = popupForm.querySelector('.popup__field_type_description');
const profName = document.querySelector('.profile__name');
const profDescription = document.querySelector('.profile__description');
const buttonOpenPopupAdd = document.querySelector('.profile__add-button');

const popupModalWindowAdd = document.querySelector('.popup_add');
const buttonClosePopupAdd = popupModalWindowAdd.querySelector('.popup__close');


function addModalWindow(popupModalWindow) {
  popupModalWindow.classList.add('popup_active');
  if (popupModalWindowEdit.classList.contains('popup_active')) {
    popupName.value = profName.textContent;
    popupDescription.value = profDescription.textContent;
  }
}
buttonOpenPopupEdit.addEventListener('click', function () {
  addModalWindow(popupModalWindowEdit);
});
buttonOpenPopupAdd.addEventListener('click', function () {addModalWindow(popupModalWindowAdd)});

function closeModalWindow(popupModalWindow) {
  popupModalWindow.classList.remove('popup_active');
}
buttonClosePopupEdit.addEventListener('click', function () {closeModalWindow(popupModalWindowEdit)});
buttonClosePopupAdd.addEventListener('click',  function () {closeModalWindow(popupModalWindowAdd)});

function oneSubmit(e) {
  e.preventDefault();
  
  profName.textContent = popupName.value;
  profDescription.textContent = popupDescription.value;
  
  closeModalWindow(popupModalWindow);
}
popupForm.addEventListener('submit', oneSubmit);

const listCards = document.querySelector('.elements__element_template');
const template = document.querySelector('.template');

function render() {
  const html = initialCards.map(getElement);
  listCards.append(...html);
}

function getElement(item) {
  const getElementTemplate = template.content.cloneNode(true);
  const img = getElementTemplate.querySelector('.elements-item__img_template');
  img.src = item.link;
  const title = getElementTemplate.querySelector('.elements-item__title_template');
  title.textContent = item.name;
  return getElementTemplate;
}
render();
