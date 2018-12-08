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

  test('test update value to the node', () => {
    hashTableNode.update(1, 'two')
    expect(hashTableNode.tryGetValue(1)).toEqual('two')
  })
})