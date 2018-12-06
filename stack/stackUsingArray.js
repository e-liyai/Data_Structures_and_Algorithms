
export default class {
  constructor() {
    this._items = []
  }

  push(item) {
    this._items.unshift(item);
  }

  pop() {
    if(this._items.length === 0) throw new Error('Stack is empty')
    return this._items.shift();
  }

  peek() {
    if(this._items.length === 0) throw new Error('Stack is empty')
    return this._items[0];
  }

  count() {
    return this._items.length
  }
}