import NodeElement from './nodeElement'

let node1
let node2
describe('test data structure node', () => {
  beforeEach(() => {
    node1 = new NodeElement(2)
    node2 = new NodeElement(3)
  })

  test('successfuly create node object', () => {
    expect(node1._value).toBe(2)
    expect(node2._value).toBe(3)
    expect(node2._next).toBe(null)
  })
  test('successfuly reset value of node object', () => {
    node1.nodeValue = 40
    expect(node1._value).toBe(40)
  })
  test('successfuly add node pointer', () => {
    node1.nodeNext = node2
    expect(node1._next).toBe(node2)
  })
})