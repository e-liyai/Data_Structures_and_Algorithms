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
})