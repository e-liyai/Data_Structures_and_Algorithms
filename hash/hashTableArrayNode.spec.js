import HashTableArrayNode from './hashTableArrayNode'

let hashTableNode
describe('test HashTableArrayNode data structure', () => {
  beforeEach(() => {
    hashTableNode = new HashTableArrayNode()
    hashTableNode.add(1, 'one')
  })

  test('test add value to the node', () => {
    expect(hashTableNode.tryGetValue(1)).toEqual('one')
  })

  test('test update value in the node', () => {
    hashTableNode.update(1, 'two')
    expect(hashTableNode.tryGetValue(1)).toEqual('two')
  })

  test('test remove value in the node', () => {
    expect(hashTableNode.remove(1)).toBeTruthy()
    expect(hashTableNode.tryGetValue(1)).toBe(null)
  })
})