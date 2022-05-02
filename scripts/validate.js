  const showInputError = (formElement, inputElement, inputErrorClass, errorClass, errorMessage) => {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.add(inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(errorClass);
  };

  const hideInputError = (formElement, inputElement, inputErrorClass, errorClass) => {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.remove(inputErrorClass);
    errorElement.classList.remove(errorClass);
    errorElement.textContent = '';
  };

  function resetError(element, config) {
    const formElement = element.querySelector(config.formSelector);
    const inputList = formElement.querySelectorAll(config.inputSelector);
    inputList.forEach((inputElement) => {
      hideInputError(formElement, inputElement, config.inputErrorClass, config.errorClass);
    });
    toggleButtonState(formElement, config.submitButtonSelector, config.inactiveButtonClass);
  }

  const checkInputValidity = (formElement, inputElement, config) => {
    if (!inputElement.validity.valid) {
      showInputError(formElement, inputElement, config.inputErrorClass, config.errorClass, inputElement.validationMessage);
    } else {
      hideInputError(formElement, inputElement, config.inputErrorClass, config.errorClass);
    }
  };

  const setEventListeners = (formElement, {inputSelector, ...config}) => {
    const inputList = Array.from(formElement.querySelectorAll(inputSelector));
    
    toggleButtonState(formElement, config.submitButtonSelector, config.inactiveButtonClass);
    
    inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', () => {
        checkInputValidity(formElement, inputElement, config)
        
        toggleButtonState(formElement, config.submitButtonSelector, config.inactiveButtonClass);
      });
    });
  };

  const enableValidation = ({formSelector, ...config }) => {
    const formList = Array.from(document.querySelectorAll(formSelector));
    formList.forEach((formElement) => {
        formElement.addEventListener('submit', (evt) => {
            evt.preventDefault();
        });
        setEventListeners(formElement, config);
    });
};

const toggleButtonState = (formElement, submitButtonSelector, inactiveButtonClass) => {
  const buttonElement = formElement.querySelector(submitButtonSelector);
  if (!formElement.checkValidity()) {
    buttonElement.classList.add(inactiveButtonClass);
    buttonElement.setAttribute("disabled", "disabled");
  } else {
    buttonElement.classList.remove(inactiveButtonClass);
    buttonElement.removeAttribute("disabled");
  };
};

  enableValidation(config);