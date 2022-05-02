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

function handlePopupOverlayClose(e) {
  if (e.target === e.currentTarget) {
   handlePopupOverlayEscapeClose();
  }
}

function handlePopupEscapeClose(e) {
  if (e.key === 'Escape') {
    handlePopupOverlayEscapeClose();
    }
}

function handlePopupOverlayEscapeClose() {
  const popup = document.querySelector('.popup_active');
  closePopup(popup);
}

function openPopup(popupModalWindow) {
  popupModalWindow.classList.add('popup_active');

  document.addEventListener('keydown', handlePopupEscapeClose);
  popupModalWindow.addEventListener('click', handlePopupOverlayClose);
  resetForm();
}

function closePopup(popupModalWindow) {
  popupModalWindow.classList.remove('popup_active');

  document.removeEventListener('keydown', handlePopupEscapeClose);
  popupModalWindow.removeEventListener('click', handlePopupOverlayClose);
}

function resetForm() {
  document.getElementById('form').reset();
  resetError(popupModalWindowAdd, config);
  resetError(popupModalWindowEdit, config);
}

function handleEditSubmit(e) {
  e.preventDefault();
  
  profName.textContent = popupName.value;
  profDescription.textContent = popupDescription.value;
  
  closePopup(popupModalWindowEdit);
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
  openPopup(popupModalWindowView);
}

function handleDelCard(e) {
  const delCard = e.target.closest('.elements-item');
  delCard.remove();
}

function handleAddSubmit(e) {
  e.preventDefault();
  
  const cardNewTitle = popupTitle.value;
  const cardNewLink = popupLink.value;
  const cardNew = getElement({name: cardNewTitle, link: cardNewLink});
  listCards.prepend(cardNew);

  resetForm();

  closePopup(popupModalWindowAdd);
}

buttonOpenPopupEdit.addEventListener('click', function () {
  popupName.value = profName.textContent;
  popupDescription.value = profDescription.textContent;
  openPopup(popupModalWindowEdit);
});
buttonOpenPopupAdd.addEventListener('click', function () {
  openPopup(popupModalWindowAdd)
});

buttonClosePopupEdit.addEventListener('click', function () {
  closePopup(popupModalWindowEdit)
});
buttonClosePopupAdd.addEventListener('click',  function () {
  closePopup(popupModalWindowAdd)
});
buttonClosePopupView.addEventListener('click',  function () {
  closePopup(popupModalWindowView)
});

popupFormEdit.addEventListener('submit', handleEditSubmit);
popupFormAdd.addEventListener('submit', handleAddSubmit);