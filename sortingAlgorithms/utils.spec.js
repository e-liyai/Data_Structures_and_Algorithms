import swap from './utils'

let list
describe('test bubble sort', () => {
  beforeEach(() => {
    list = [4,1,6,3,7,9,6,4,2,6,5,8]
  })

  test('test swap', () => {
    expect(list[1]).toBe(1)
    swap(list, 1)
    expect(list[1]).toBe(6)
  })
  test('test swap 2', () => {
    expect(list[list.length - 2]).toBe(5)
    swap(list, list.length - 2)
    expect(list[list.length - 2]).toBe(8)
  })
})