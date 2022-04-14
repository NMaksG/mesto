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

function handleEditSubmit(e) {
  e.preventDefault();
  
  profName.textContent = popupName.value;
  profDescription.textContent = popupDescription.value;
  
  closeModalWindow(popupModalWindow);
}
popupFormEdit.addEventListener('submit', handleEditSubmit);

const listCards = document.querySelector('.elements__element_template');
const template = document.querySelector('.template');

function render() {
  const html = initialCards.map(getElement);
  listCards.append(...html);
}
render();

function getElement(item) {
  const getElementTemplate = template.content.cloneNode(true);
  const img = getElementTemplate.querySelector('.elements-item__img_template');
  const title = getElementTemplate.querySelector('.elements-item__title_template');
  const buttonDelCard = getElementTemplate.querySelector('.elements-item__del_card');

  img.src = item.link;
  img.alt = item.name;
  title.textContent = item.name;

  buttonDelCard.addEventListener('click', handleDelCard);  

  return getElementTemplate;
}

function handleDelCard(e) {
  const delCard = e.target.closest('.elements-item');
  delCard.remove();
}

function handleAddSubmit(e) {
  e.preventDefault();
 
  const TitleNewCard = popupTitle.value;
  const LinkNewCard = popupLink.value;
  const NewCard = getElement({name: TitleNewCard, link: LinkNewCard});
  listCards.prepend(NewCard);
  
  closeModalWindow(popupModalWindowAdd);
}
popupFormAdd.addEventListener('submit', handleAddSubmit);