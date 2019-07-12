import hash from './hexadecimalHashing'

describe('test hexadecimal hashing algorithm', () => {
  test('test number input', () => {
    expect(hash(4293)).toEqual('-16343c0220c651')
  })
  test('test string input', () => {
    expect(hash('father')).toEqual('-8ab1feb7b2231')
  })
  test('test incorrect hash', () => {
    expect(hash('incorrect')).not.toEqual(20)
  })
  test('test deterministic', () => {
    const val1 = hash('458df')
    const val2 = hash('458df')
    expect(val1).toEqual(val2)
  })
})