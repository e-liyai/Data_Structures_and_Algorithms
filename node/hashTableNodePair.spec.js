import HashNode from './hashTableNodePair'

let node1
describe('test data structure node', () => {
  beforeEach(() => {
    node1 = new HashNode(4, 'four')
  })

  test('successfuly create node object', () => {
    expect(node1._value).toBe('four')
    expect(node1._key).toBe(4)
    expect(node1._value).not.toBe('six')
  })
  test('set node key', () => {
    node1.setKey = 5
    expect(node1._key).toBe(5)
  })
  test('set node value', () => {
    node1.setValue = 'five'
    expect(node1._value).toBe('five')
  })
})