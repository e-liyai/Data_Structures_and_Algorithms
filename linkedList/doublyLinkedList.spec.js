import DoublyLinkedList from './doublyLinkedList'

let doublylinkedList
describe('test doubly linked list data structure', () => {
  beforeEach(() => {
    doublylinkedList = new DoublyLinkedList()
  })

  test('test if list is empty', () => {
    expect(doublylinkedList.count).toBe(0)
  })

  test('test add item to front of empty list', () => {
    doublylinkedList.addFront(77)
    let node = doublylinkedList.head._next
    expect(node._value).toBe(77)
    expect(node._next).toBe(null)
    expect(node._previous).toBe(doublylinkedList.head)
    expect(doublylinkedList.tail._next).toBe(node)
  })

  test('test add item to front of existing list', () => {
    doublylinkedList.addFront(66)
    doublylinkedList.addFront(75)
    let node = doublylinkedList.head._next
    expect(node._value).toBe(75)
    let lastNode = doublylinkedList.tail._next
    expect(lastNode._value).toBe(66)
    expect(lastNode._previous).toBe(node)
    expect(lastNode._next).toBe(null)
  })

  test('test add item to the back of an empty list', () => {
    doublylinkedList.addLast(12)
    let node = doublylinkedList.head._next
    let lastNode = doublylinkedList.tail._next
    expect(node._value).toEqual(lastNode._value)
    expect(node._next).toEqual(null)
    expect(node._previous).toEqual(doublylinkedList.head)
  })

  test('test add item to the back of an existing list', () => {
    doublylinkedList.addFront(52)
    doublylinkedList.addFront(44)
    doublylinkedList.addFront(80)
    let secondToLastNode = doublylinkedList.tail._next
    expect(secondToLastNode._value).toEqual(52)
    expect(secondToLastNode._previous._value).toEqual(44)
    doublylinkedList.addLast(8)
    let lastNode = doublylinkedList.tail._next
    expect(lastNode._value).toEqual(8)
    expect(lastNode._next).toEqual(null)
    expect(lastNode._previous).toEqual(secondToLastNode)
  })


  test('remove first items in an existing list', () => {
    doublylinkedList.addFront(12)
    doublylinkedList.addFront(28)
    doublylinkedList.addLast(8)
    doublylinkedList.addLast(63)
    doublylinkedList.addLast(57)
    doublylinkedList.addFront(88)
    let node = doublylinkedList.head._next
    expect(node._value).toBe(88)
    doublylinkedList.removeFirst()
    node = doublylinkedList.head._next
    expect(node._value).toBe(28)
    expect(node._previous).toBe(doublylinkedList.head)
  })

  test('remove first item in list with one item', () => {
    doublylinkedList.addFront(44)
    doublylinkedList.removeFirst()
    expect(doublylinkedList.head._next).toBe(null)
    expect(doublylinkedList.tail._next).toBe(null)
  })

  test('remove last item in an existing list', () => {
    doublylinkedList.addFront(44)
    doublylinkedList.addFront(12)
    doublylinkedList.addFront(28)
    doublylinkedList.addLast(8)
    doublylinkedList.addLast(63)
    doublylinkedList.addLast(57)
    doublylinkedList.addFront(88)
    let last = doublylinkedList.tail._next
    let secondToLast = doublylinkedList.tail._next._previous
    expect(last._next).toBe(null)
    expect(last._previous).toBe(secondToLast)
    expect(last._value).toBe(57)
    expect(secondToLast._next).toBe(last)
    doublylinkedList.removeLast()
    expect(secondToLast._next).toBe(null)
    expect(doublylinkedList.tail._next).toBe(secondToLast)
  })

  test('add item in the middle of existing list', () => {
    doublylinkedList.addFront(44)
    doublylinkedList.addFront(12)
    doublylinkedList.addFront(28)
    doublylinkedList.addLast(8)
    doublylinkedList.addLast(63)
    doublylinkedList.addLast(57)
    doublylinkedList.addFront(88)
    expect(doublylinkedList.count).toBe(7)
    let current = doublylinkedList.head._next._next._next
    doublylinkedList.addBefore(current, 22)
    let newNode = doublylinkedList.head._next._next._next
    expect(newNode._value).toBe(22)
  })

  test('remove item from any point', () => {
    doublylinkedList.addFront(44)
    doublylinkedList.addFront(12)
    doublylinkedList.addFront(28)
    doublylinkedList.addLast(8)
    doublylinkedList.addLast(63)
    doublylinkedList.addLast(57)
    doublylinkedList.addFront(88)
    expect(doublylinkedList.count).toBe(7)
    let current = doublylinkedList.head._next._next._next
    expect(current._value).toBe(12)
    doublylinkedList.remove(current)
    current = doublylinkedList.head._next._next._next
    expect(current._value).toBe(44)
    expect(current._previous._value).toBe(28)
    expect(current._next._value).toBe(8)

  })

  test('remove item from last point', () => {
    doublylinkedList.addFront(44)
    doublylinkedList.addFront(12)
    doublylinkedList.addFront(28)
    doublylinkedList.addLast(8)
    doublylinkedList.addLast(63)
    doublylinkedList.addLast(57)
    doublylinkedList.addFront(88)
    expect(doublylinkedList.count).toBe(7)
    let current = doublylinkedList.tail._next
    expect(current._value).toBe(57)
    doublylinkedList.remove(current)
    current = doublylinkedList.tail._next
    expect(current._value).toBe(63)
    expect(current._previous._value).toBe(8)
    expect(current._next).toBe(null)

  })
})