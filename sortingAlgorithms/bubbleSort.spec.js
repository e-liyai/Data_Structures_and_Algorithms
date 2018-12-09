import bubbleSort from './bubbleSort'

let list
describe('test bubble sort', () => {
  beforeEach(() => {
    list = [4,1,6,3,7,9,6,4,2,6,5,8]
  })

  test('test bubble sort', () => {
    bubbleSort(list)
    console.log('~~~~', list)
    expect(list).toBeTruthy()
  })
})