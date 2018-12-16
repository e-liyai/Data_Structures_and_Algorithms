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

  test('test add items to min heap', () => {
    minHeap.add(6)
    minHeap.add(3)
    minHeap.add(9)
    expect(minHeap.size()).toBe(3)
    expect(minHeap.peek()).toBe(3)
  })

  test('test remove item from heap', () => {
    minHeap.add(23)
    minHeap.add(64)
    minHeap.add(51)
    minHeap.add(44)
    minHeap.add(7)
    minHeap.add(11)
    minHeap.add(9)
    minHeap.add(21)
    expect(minHeap.size()).toBe(8)
    expect(minHeap.peek()).toBe(7)
    minHeap.poll()
    expect(minHeap.peek()).toBe(9)
    minHeap.poll()
    expect(minHeap.peek()).toBe(11)
  })

  test('test right left child and right child', () => {
    minHeap.add(6)
    minHeap.add(3)
    minHeap.add(9)
    expect(minHeap.rightChild(0)).toBe(9)
    expect(minHeap.leftChild(0)).toBe(6)
  })
})