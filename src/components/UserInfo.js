export default class UserInfo {
  constructor({name, info, avatar}) {
    this._nameElement = name;
    this._infoElement = info;
    this._avatarElement = avatar;
  }
  
  getUserInfo = () => {
    return {
      name: this._nameElement.textContent,
      info: this._infoElement.textContent
    }
  }

  // getAvatar = (avatar) => {
  //     avatar: this._avatarElement.src
  // }

  setUserInfo(name, about) {
    this._nameElement.textContent = name;
    this._infoElement.textContent = about;
  }

  setAvatar(avatar) {
    this._avatarElement.src = avatar;
  }
}
