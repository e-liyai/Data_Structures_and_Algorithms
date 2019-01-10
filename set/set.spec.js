import Stack from './set'

let set
describe('test set collection', () => {
  beforeEach(() => {
    set = new Stack()
  })

  test('test add item to set', () => {
    set.add(4)
    expect(set.count()).toBe(1)
    expect(set._items[0]).toBe(4)
  })
  test('test add list into set', () => {
    set.addRange([2, 5, 1, 8])
    expect(set.count()).toBe(4)
    expect(set._items[0]).toBe(2)
    expect(set._items[3]).toBe(8)
  })
  test('test add existing value', () => {
    set.addRange([2, 5, 1, 8])
    expect(() => set.add(2)).toThrowError('Item already exists')
  })
})