import { hash } from './simpleAdditionHash'

describe('test simple hashing algorithm', () => {
  test('test if input is string', () => {
    expect(hash('4293')).toEqual('invalid input')
  })
  test('test number input', () => {
    expect(hash(4293)).toEqual(18)
  })
})