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

  test('add items to min heap', () => {
    minHeap.add(6)
    minHeap.add(3)
    minHeap.add(9)
    expect(minHeap.size()).toBe(3)
    expect(minHeap.peek()).toBe(3)
  })
})