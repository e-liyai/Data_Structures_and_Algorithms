import BadMatchTable from './badMatchTable'

let badMatchTable
describe('test bad match table', () => {
  beforeEach(() => {
    badMatchTable = new BadMatchTable('TRUTH')
  })

  test('test created table', () => {
  	expect(badMatchTable._defaultValue).toBe(5)
  	expect(badMatchTable._pattern).toBe('TRUTH')
  })

  test('test table generated', () => {
  	expect(badMatchTable._distances['T']).toBe(1)
  	expect(badMatchTable._distances['R']).toBe(3)
  	expect(badMatchTable._distances['U']).toBe(2)
  })
})