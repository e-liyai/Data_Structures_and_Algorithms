import bubbleSort from './bubbleSort'

let list
describe('test bubble sort', () => {
  beforeEach(() => {
    list = [4,1,6,3,7,9,6,4,2,6,5,8]
  })

  test('test bubble sort', () => {
    bubbleSort(list)
    expect(list[0]).toBe(1)
    expect(list[4]).toBe(4)
    expect(list[list.length-1]).toBe(9)
  })
})