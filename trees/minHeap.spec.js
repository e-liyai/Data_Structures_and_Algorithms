import MinHeap from './minHeap'

let minHeap
describe('test stack list data structure', () => {
  beforeEach(() => {
    minHeap = new MinHeap()
  })

  test('test created min heap', () => {
    expect(minHeap.size()).toBe(0)
    minHeap.add(6)
    expect(minHeap.size()).toBe(1)
  })
})