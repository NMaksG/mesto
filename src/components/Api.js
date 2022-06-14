export default class Api {
  constructor({baseUrl, headers}) {
    this._url = baseUrl;
    this._headers = headers;
    // this._headers = {
    //   authorization: '2da19b5e-259f-4a92-b11d-fa94b554e063',
    //   'Content-Type': 'application/json'
    // }
  }

  getInitialCards() {
    return fetch(`${this._url}/cards`, {
      headers: this._headers,
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
  
        return Promise.reject(`Ошибка: ${res.status}`);
      });
  }

  getUserInfo() {
    return fetch(`${this._url}/users/me`, {
      headers: this._headers
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
  
        return Promise.reject(`Ошибка: ${res.status}`);
      });
  
  } 
}