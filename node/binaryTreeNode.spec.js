import BinaryNode from './binaryTreeNode'

let node1
let node2
let node3
describe('test data structure node', () => {
  beforeEach(() => {
    node1 = new BinaryNode(4)
    node2 = new BinaryNode(6)
    node3 = new BinaryNode(2)
  })

  test('successfuly create node object', () => {
    expect(node1._value).toBe(4)
  })

  test('successfuly add next and previous pointers', () => {
    node1.nodeLeft = node3
    node1.nodeRight = node2
    expect(node1._left._value).toBe(2)
    expect(node1._right._value).toBe(6)
  })

  test('test value comparison', () => {
    expect(node1.compareWith(2)).toEqual(1)
    expect(node1.compareWith(6)).toEqual(-1)
    expect(node1.compareWith(4)).toEqual(0)
  })
})