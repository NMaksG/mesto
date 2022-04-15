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

const popupModalWindowView = document.querySelector('.popup_view');
const buttonClosePopupView = popupModalWindowView.querySelector('.popup__close');
const popupTitleView = popupModalWindowView.querySelector('.popup__title_view');
const popupImgView = popupModalWindowView.querySelector('.popup__img_view');

const listCards = document.querySelector('.elements__element_template');
const template = document.querySelector('.template');


function addModalWindow(popupModalWindow) {
  popupModalWindow.classList.add('popup_active');
}

function closeModalWindow(popupModalWindow) {
  popupModalWindow.classList.remove('popup_active');
}

function handleEditSubmit(e) {
  e.preventDefault();
  
  profName.textContent = popupName.value;
  profDescription.textContent = popupDescription.value;
  
  closeModalWindow(popupModalWindow);
}

function render() {
  const html = initialCards.map(getElement);
  listCards.append(...html);
}
render();

function getElement(item) {
  const getElementTemplate = template.content.cloneNode(true);
  const imgView = getElementTemplate.querySelector('.elements-item__img_template');
  const title = getElementTemplate.querySelector('.elements-item__title_template');
  const buttonDelCard = getElementTemplate.querySelector('.elements-item__del_card');
  const cardLike = getElementTemplate.querySelector('.elements-item__like');
  
  imgView.src = item.link;
  imgView.alt = item.name;
  title.textContent = item.name;
  
  buttonDelCard.addEventListener('click', handleDelCard); 
  
  imgView.addEventListener('click', function() {
    handleCardView(item);
  });
  
  cardLike.addEventListener('click', function() {
    cardLike.classList.toggle('elements-item__like_active');
  });
  
  return getElementTemplate;
}

function handleCardView(item) {
  popupImgView.src = item.link;
  popupTitleView.alt = item.name;
  popupTitleView.textContent = item.name;
  addModalWindow(popupModalWindowView);
}

function handleDelCard(e) {
  const delCard = e.target.closest('.elements-item');
  delCard.remove();
}

function handleAddSubmit(e) {
  e.preventDefault();
  
  const cardNewTitle = popupTitle.value;
  const cardNewLink = popupLink.value;
  const cardNewAlt = popupTitle.value;
  const cardNew = getElement({name: cardNewTitle, link: cardNewLink, alt: cardNewAlt});
  listCards.prepend(cardNew);

  popupTitle.value = '';
  popupLink.value = '';
  popupTitle.value = '';
    
  closeModalWindow(popupModalWindowAdd);
}

buttonOpenPopupEdit.addEventListener('click', function () {
  addModalWindow(popupModalWindowEdit);
  popupName.value = profName.textContent;
  popupDescription.value = profDescription.textContent;
});
buttonOpenPopupAdd.addEventListener('click', function () {
  addModalWindow(popupModalWindowAdd)
});

buttonClosePopupEdit.addEventListener('click', function () {
  closeModalWindow(popupModalWindowEdit)
});
buttonClosePopupAdd.addEventListener('click',  function () {
  closeModalWindow(popupModalWindowAdd)
});
buttonClosePopupView.addEventListener('click',  function () {
  closeModalWindow(popupModalWindowView)
});

popupFormEdit.addEventListener('submit', handleEditSubmit);
popupFormAdd.addEventListener('submit', handleAddSubmit);