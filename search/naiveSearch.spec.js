import search from './naiveSearch'

describe('test naive search', () => {
	test('success test', () => {
		expect(search('man', woman)).toBe(true)
	})
})