import Queue from './queueUsingLinkedList'

let queue
describe('test stack list data structure', () => {
  beforeEach(() => {
    queue = new Queue()
  })

  test('test if queue is empty', () => {
    expect(queue.count()).toBe(0)
  })

  test('test enqueue item to queue', () => {
    queue.enqueue(32)
    expect(queue.peek()).toBe(32)
  })

  test('test enqueue and dequeue items to queue', () => {
    queue.enqueue(32)
    queue.enqueue(53)
    queue.enqueue(67)
    queue.enqueue(11)
    expect(queue.peek()).toBe(32)
    expect(queue.dequeue()).toBe(32)
    expect(queue.dequeue()).toBe(53)
    expect(queue.dequeue()).toBe(67)
    expect(queue.dequeue()).toBe(11)
    expect(queue.count()).toBe(0)
  })

  test('test enqueue and dequeue error handling in stack', () => {
    expect(() => queue.dequeue()).toThrowError('Stack is empty')
    expect(() => queue.peek()).toThrowError('Stack is empty')
  })
})