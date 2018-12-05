import NodeElement from './doublyNodeElement'

let node1
let node2
let node3
describe('test data structure node', () => {
  beforeEach(() => {
    node1 = new NodeElement(2)
    node2 = new NodeElement(3)
    node3 = new NodeElement(4)
  })

  test('successfuly create node object', () => {
    expect(node1._value).toBe(2)
    expect(node2._value).toBe(3)
  })
  test('successfuly add next and previous pointers', () => {
    node2.nodeNext = node3
    node2.nodePrevious = node1
    expect(node2._next).toBe(node3)
    expect(node2._previous).toBe(node1)
  })
})