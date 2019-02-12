import BadMatchTable from './badMatchTable'

let badMatchTable
describe('test bad match table', () => {
  beforeEach(() => {
    badMatchTable = new BadMatchTable('TRUTH')
  })

  test('test created table', () => {
  	expect(badMatchTable._pattern).toBe('TRUTH')
  })

  test('test table generated', () => {
  	expect(badMatchTable.getProperty('T')).toBe(1)
	expect(badMatchTable.getProperty('R')).toBe(3)
	expect(badMatchTable.getProperty('U')).toBe(2)
  })
})