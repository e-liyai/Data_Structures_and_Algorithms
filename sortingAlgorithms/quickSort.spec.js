import quickSort from './quickSort'

let list
describe('test insertionSort sort', () => {
  beforeEach(() => {
    list = [4,1,6,3,7,9,6,4,2,6,5,8]
  })

  test('test insertionSort sort', () => {
    quickSort(list, 0, list.length-1)
    console.log(list)
    expect(list[0]).toBe(1)
    expect(list[4]).toBe(4)
    expect(list[list.length-1]).toBe(9)
  })
})