import LinkedList from './linkedList'

let linkedList
describe('test linked list data structure', () => {
  beforeEach(() => {
    linkedList = new LinkedList()
  })

  test('test if list is empty', () => {
    expect(linkedList.count).toBe(0)
  })

  test('test add item to front of empty list', () => {
    linkedList.addFront(5)
    let node = linkedList.head._next
    expect(node._value).toBe(5)
    expect(node._next).toBe(null)
  })

  test('test add item to front of existing list', () => {
    linkedList.addFront(5)
    linkedList.addFront(45)
    linkedList.addFront(78)
    let node = linkedList.head._next
    expect(node._value).toBe(78)
    let lastNode = linkedList.tail._next
    expect(lastNode._value).toBe(5)
  })

  test('test add item to the back of an empty list', () => {
    linkedList.addLast(12)
    let node = linkedList.head._next
    let lastNode = linkedList.tail._next
    expect(node._value).toEqual(lastNode._value)
  })

  test('test add item to the back of an existing list', () => {
    linkedList.addFront(12)
    linkedList.addFront(28)
    linkedList.addLast(8)
    let lastNode = linkedList.tail._next
    expect(lastNode._value).toEqual(8)
    let secondToLastNode = lastNode._next
    expect(secondToLastNode._value).toEqual(12)
  })

  test('test linkedlist counter', () => {
    linkedList.addFront(12)
    linkedList.addFront(28)
    linkedList.addLast(8)
    linkedList.addLast(63)
    linkedList.addLast(57)
    linkedList.addFront(88)
    expect(linkedList.count).toEqual(6)
  })

  test('remove first items in an existing list', () => {
    linkedList.addFront(12)
    linkedList.addFront(28)
    linkedList.addLast(8)
    linkedList.addLast(63)
    linkedList.addLast(57)
    linkedList.addFront(88)
    let node = linkedList.head._next
    expect(node._value).toBe(88)
    linkedList.removeFirst()
    node = linkedList.head._next
    expect(node._value).toBe(28)
  })

  test('remove first item in list with one item', () => {
    linkedList.addFront(44)
    linkedList.removeFirst()
    expect(linkedList.head._next).toBe(null)
  })

  test('remove last item in list with one item', () => {
    linkedList.addFront(44)
    linkedList.removeLast()
    expect(linkedList.head._next).toBe(null)
  })
})