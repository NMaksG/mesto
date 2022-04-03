let popupModalWindow = document.querySelector('.popup');
let buttonOpenPopup = document.querySelector('.profile__edit-button');
let buttonClosePopup = popupModalWindow.querySelector('.popup__close');
let popupForm = document.querySelector('.popup__content');
let popupName = popupForm.querySelector('.popup__field_type_name');
let popupDescription = popupForm.querySelector('.popup__field_type_description');
let profName = document.querySelector('.profile__name');
let profDescription = document.querySelector('.profile__description');

function addModalWindow() {
  popupModalWindow.classList.add('popup_active');

  popupName.value = profName.textContent;
  popupDescription.value = profDescription.textContent;
  console.log(addModalWindow)
}
buttonOpenPopup.addEventListener('click', addModalWindow);

function closeModalWindow() {
  popupModalWindow.classList.remove('popup_active');
  console.log(closeModalWindow)
}
buttonClosePopup.addEventListener('click', closeModalWindow);

function oneSubmit(e) {
    e.preventDefault();
    
    profName.textContent = popupName.value;
    profDescription.textContent = popupDescription.value;

    closeModalWindow();
}
popupForm.addEventListener('submit', oneSubmit);