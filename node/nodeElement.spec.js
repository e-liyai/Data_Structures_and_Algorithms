import NodeElement from 'nodeElement'

let node1
let node2
describe('test data structure node', () => {
  beforeEach(() => {
    node1 = new NodeElement(2)
    node2 = new NodeElement(3)
  })

  test('successfuly create node object', () => {
    expect(node1.value).toBe(2)
  })
})