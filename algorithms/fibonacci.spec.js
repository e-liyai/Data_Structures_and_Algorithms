import fibonacci from './fibonacci'

describe('#Fibonacci', () => {
  test('display fibonacci', () => {
    const x = fibonacci(2)
    expect(x).toBe(44)
  })
})