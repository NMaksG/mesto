(()=>{"use strict";var e={formSelector:".popup__form",inputSelector:".popup__field",submitButtonSelector:".popup__submit-button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__field_type_error",errorClass:"popup__error_active"};function t(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function n(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var o=n((function e(t,n,o){var i=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),r(this,"_getTemplate",(function(){return document.querySelector(i._template).content.querySelector(".elements-item").cloneNode(!0)})),r(this,"generateCard",(function(){return i._element=i._getTemplate(),i._cardView=i._element.querySelector(".elements-item__img_template"),i._cardView.src=i._link,i._cardView.alt=i._name,i._element.querySelector(".elements-item__title_template").textContent=i._name,i._setEventListeners(),i._element})),r(this,"_handleDelCard",(function(){i._element.remove(),i._element=null})),r(this,"_handleToggleLike",(function(){i._cardLike.classList.toggle("elements-item__like_active")})),r(this,"_setEventListeners",(function(){i._cardLike=i._element.querySelector(".elements-item__like"),i._element.querySelector(".elements-item__del_card").addEventListener("click",(function(){i._handleDelCard()})),i._cardLike.addEventListener("click",(function(){i._handleToggleLike()})),i._cardView.addEventListener("click",(function(){i._handlePhotoView({name:i._name,link:i._link})}))})),this._name=t.name,this._link=t.link,this._template=n,this._handlePhotoView=o}));function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=function(){function e(t,n){var r=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),u(this,"_showInputError",(function(e,t){var n=r._formElementPopup.querySelector("#".concat(e.id,"-error"));e.classList.add(r._inputErrorClass),n.textContent=t,n.classList.add(r._errorClass)})),u(this,"_hideInputError",(function(e){var t=r._formElementPopup.querySelector("#".concat(e.id,"-error"));e.classList.remove(r._inputErrorClass),t.classList.remove(r._errorClass),t.textContent=""})),u(this,"_checkInputValidity",(function(e){e.validity.valid?r._hideInputError(e):r._showInputError(e,e.validationMessage)})),u(this,"_setEventListeners",(function(){r._toggleButtonState(),r._inputList.forEach((function(e){e.addEventListener("input",(function(){r._checkInputValidity(e),r._toggleButtonState()}))}))})),u(this,"enableValidation",(function(){r._formElementPopup.addEventListener("submit",(function(e){e.preventDefault()})),r._setEventListeners()})),u(this,"_toggleButtonState",(function(){r._formElementPopup.checkValidity()?(r._buttonElement.classList.remove(r._inactiveButtonClass),r._buttonElement.removeAttribute("disabled")):(r._buttonElement.classList.add(r._inactiveButtonClass),r._buttonElement.setAttribute("disabled","disabled"))})),this._inputSelector=t.inputSelector,this._submitButtonSelector=t.submitButtonSelector,this._inactiveButtonClass=t.inactiveButtonClass,this._inputErrorClass=t.inputErrorClass,this._errorClass=t.errorClass,this._formElementPopup=n,this._inputList=Array.from(this._formElementPopup.querySelectorAll(this._inputSelector)),this._buttonElement=this._formElementPopup.querySelector(this._submitButtonSelector)}var t,n;return t=e,(n=[{key:"resetError",value:function(){var e=this;this._inputList.forEach((function(t){e._hideInputError(t)})),this._toggleButtonState()}}])&&i(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var l=function(){function e(t,n){var r=t.items,o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderElement=r,this._renderer=o,this._container=n}var t,n;return t=e,(n=[{key:"_clear",value:function(){this._container.innerHTML=""}},{key:"addItem",value:function(e){this._container.append(e)}},{key:"renderItems",value:function(){var e=this;this._clear(),this._renderElement.forEach((function(t){e._renderer(t)}))}}])&&a(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var f=function(){function e(t){var n=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),p(this,"_handleEscClose",(function(e){"Escape"===e.key&&n.close(n._popup)})),p(this,"_handleOverlayClose",(function(e){e.target===e.currentTarget&&n.close(n._popup)})),this._popup=t,this._buttonClose=this._popup.querySelector(".popup__close"),this._popupActive="popup_active"}var t,n;return t=e,(n=[{key:"open",value:function(){this._popup.classList.add(this._popupActive),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove(this._popupActive),document.removeEventListener("keydown",this._handleEscClose)}},{key:"setEventListeners",value:function(){var e=this;this._buttonClose.addEventListener("click",(function(){e.close()})),this._popup.addEventListener("mousedown",this._handleOverlayClose)}}])&&s(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function _(e){return _="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_(e)}function d(e,t){return d=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},d(e,t)}function y(e,t){if(t&&("object"===_(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return m(e)}function m(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function h(){return h="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=b(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},h.apply(this,arguments)}function b(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=v(e)););return e}function v(e){return v=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},v(e)}var w=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&d(e,t)}(i,e);var t,n,r,o=(n=i,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=v(n);if(r){var o=v(this).constructor;e=Reflect.construct(t,arguments,o)}else e=t.apply(this,arguments);return y(this,e)});function i(e){var t,n,r,u,c;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),c=function(e){n._popupImgView.src=e.link,n._popupImgView.alt=e.name,n._popupTitleView.textContent=e.name,h((t=m(n),v(i.prototype)),"open",t).call(t)},(u="open")in(r=m(n=o.call(this,e)))?Object.defineProperty(r,u,{value:c,enumerable:!0,configurable:!0,writable:!0}):r.open=c,n._popupImgView=n._popup.querySelector(".popup__img_view"),n._popupTitleView=n._popup.querySelector(".popup__title_view"),n}return t=i,Object.defineProperty(t,"prototype",{writable:!1}),t}(f);function g(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var E=function(){function e(t){var n,r,o=this,i=t.name,u=t.info;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),r=function(){return{name:o._nameElement.textContent,info:o._infoElement.textContent}},(n="getUserInfo")in this?Object.defineProperty(this,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):this[n]=r,this._nameElement=i,this._infoElement=u}var t,n;return t=e,(n=[{key:"setUserInfo",value:function(e){this._nameElement.textContent=e.name,this._infoElement.textContent=e.about}}])&&g(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function k(e){return k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},k(e)}function O(e,t){return O=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},O(e,t)}function S(e,t){if(t&&("object"===k(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return j(e)}function j(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function P(){return P="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=C(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},P.apply(this,arguments)}function C(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=L(e)););return e}function L(e){return L=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},L(e)}function q(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var I=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&O(e,t)}(i,e);var t,n,r,o=(n=i,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=L(n);if(r){var o=L(this).constructor;e=Reflect.construct(t,arguments,o)}else e=t.apply(this,arguments);return S(this,e)});function i(e,t){var n,r,u;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),q(j(u=o.call(this,e)),"_getInputValues",(function(){return u._formValues={},u._inputList.forEach((function(e){u._formValues[e.name]=e.value})),u._formValues})),q(j(u),"setEventListeners",(function(){P((n=j(u),L(i.prototype)),"setEventListeners",n).call(n),u._popup.addEventListener("submit",(function(e){e.preventDefault(),u._handleSubmit(u._getInputValues())}))})),q(j(u),"close",(function(){P((r=j(u),L(i.prototype)),"close",r).call(r),u._element.reset()})),u._handleSubmit=t,u._element=u._popup.querySelector(".popup__form"),u._inputList=Array.from(u._element.querySelectorAll(".popup__field")),u}return t=i,Object.defineProperty(t,"prototype",{writable:!1}),t}(f),V=document.querySelector(".popup_edit"),T=V.querySelector(".popup__form"),x=document.querySelector(".profile__edit-button"),R=T.querySelector(".popup__field_type_name"),B=T.querySelector(".popup__field_type_description"),A=document.querySelector(".profile__name"),D=document.querySelector(".profile__description"),U=document.querySelector(".popup_add"),z=U.querySelector(".popup__form"),M=document.querySelector(".profile__add-button"),H=document.querySelector(".popup_view"),N=document.querySelector(".elements__element_template");function F(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var G=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._url=t,this._headers=n}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return fetch("".concat(this._url,"/users/me"),{headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))}}])&&F(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}(),J=new c(e,z),K=new c(e,T),Q=new I(U,(function(e){var t=$({name:e.name,link:e.link});N.prepend(t),Q.close()})),W=new I(V,(function(e){Y.setUserInfo(e),W.close()})),X=new w(H),Y=new E({name:A,info:D}),Z=new l({items:[{name:"Архыз",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg"},{name:"Челябинская область",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg"},{name:"Иваново",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg"},{name:"Камчатка",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg"},{name:"Холмогорский район",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg"},{name:"Байкал",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg"}],renderer:function(e){var t=$(e);Z.addItem(t)}},N);function $(e){return new o(e,".template",ee).generateCard()}function ee(e){X.open(e)}new G({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-43",headers:{authorization:"2da19b5e-259f-4a92-b11d-fa94b554e063","Content-Type":"application/json"}}).getUserInfo().then((function(e){console.log(e)})).catch((function(e){console.log(e)})),J.enableValidation(),K.enableValidation(),Z.renderItems(),X.setEventListeners(),W.setEventListeners(),Q.setEventListeners(),x.addEventListener("click",(function(){var e=Y.getUserInfo();R.value=e.name,B.value=e.info,K.resetError(),W.open()})),M.addEventListener("click",(function(){J.resetError(),Q.open()}))})();
//# sourceMappingURL=main.js.map