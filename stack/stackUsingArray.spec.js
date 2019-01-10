import Stack from './stackUsingArray'

let stack
describe('test stack list data structure', () => {
  beforeEach(() => {
    stack = new Stack()
  })

  test('test if stack is empty', () => {
    expect(stack.count()).toBe(0)
  })

  test('test push item to stack', () => {
    stack.push(5)
    expect(stack.count()).toBe(1)
    stack.push(34)
    expect(stack.count()).toBe(2)
  })

  test('test peek in stack', () => {
    stack.push(5)
    stack.push(4)
    stack.push(3)
    expect(stack.peek()).toBe(3)
  })

  test('test pop in stack', () => {
    stack.push(5)
    stack.push(4)
    stack.push(3)
    expect(stack.count()).toBe(3)
    expect(stack.pop()).toBe(3)
    expect(stack.pop()).toBe(4)
    expect(stack.pop()).toBe(5)
  })

  test('test pop and peek error handling in stack', () => {
    expect(() => stack.pop()).toThrowError('Stack is empty')
    expect(() => stack.peek()).toThrowError('Stack is empty')
  })
})