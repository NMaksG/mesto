export default class Section {
  constructor({ items, renderer }, containerSelector) {
    this._renderElement = items;
    this._renderer = renderer;
    this._container = containerSelector;
  }
  
  _clear() {
    this._container.innerHTML = '';
  }
  
  addItem(element) {
    this._container.append(element);
  }

  renderItems() {
    this._clear();

    this._renderElement.forEach((item) => {
      this._renderer(item);
    })
  }
}