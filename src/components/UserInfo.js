export default class UserInfo {
  constructor({name, info}) {
    this._nameElement = name;
    this._infoElement = info;
  }
  
  getUserInfo = () => {
    return {
      name: this._nameElement.textContent,
      info: this._infoElement.textContent,
    }
  }

  setUserInfo(data) {
    this._nameElement.textContent = data.name;
    this._infoElement.textContent = data.about;
  }
}