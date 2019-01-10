import _ from 'lodash'

export default class {
  constructor() {
    this._items = []
  }

  add(item) {
    if(this.contains(item)) throw new Error('Item already exists')
    this._items.push(item)
  }

  addRange(items) {
    try{
      items.forEach(item => this.add(item))
    } catch (e) {
      throw new Error('An item in the list already exists')
    }
  }

  remove(item) {
    const removed = _.remove(this._items, value => value === item)
    return !!removed;
  }

  contains(item){
    return _.includes(this._items, item);
  }

  count() {
    return this._items.length
  }
}