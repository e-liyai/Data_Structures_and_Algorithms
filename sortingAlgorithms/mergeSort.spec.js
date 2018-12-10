import mergeSort from './mergeSort'

let list
describe('test insertionSort sort', () => {
  beforeEach(() => {
    list = [4,1,6,3,7,9,6,4,2,6,5,8]
  })

  test('test insertionSort sort', () => {
    let sorted = mergeSort(list)
    expect(sorted[0]).toBe(1)
    expect(sorted[4]).toBe(4)
    expect(sorted[list.length-1]).toBe(9)
  })
})