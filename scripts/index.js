let popapModalWindow = document.querySelector('.popap');
let buttonOpenPopap = document.querySelector('.profile__edit-button');
let buttonClosePopap = popapModalWindow.querySelector('.popap__close');
let popapForm = document.querySelector('.popap__content');
let popapName = popapForm.querySelector('.popap__field_name');
let popapDescription = popapForm.querySelector('.popap__field_description');
let profName = document.querySelector('.profile__name');
let profDescription = document.querySelector('.profile__description');

function toggleModalWindow() {
  popapModalWindow.classList.toggle('popap_active');

  popapName.value = profName.textContent;
  popapDescription.value = profDescription.textContent;
}

buttonOpenPopap.addEventListener('click', toggleModalWindow);
buttonClosePopap.addEventListener('click', toggleModalWindow);

function oneSubmit(e) {
    e.preventDefault();
    
    profName.textContent = popapName.value;
    profDescription.textContent = popapDescription.value;

    toggleModalWindow();
}

popapForm.addEventListener('submit', oneSubmit);