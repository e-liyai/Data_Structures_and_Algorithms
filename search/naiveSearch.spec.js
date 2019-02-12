import search from './naiveSearch'

describe('test naive search', () => {
	test('success test', () => {
		expect(search('man', 'woman')).toBeTruthy
	})

	test('fail check test', () => {
		expect(search('father', 'woman')).toBeFalsy
	})

	test('empty variable test', () => {
		expect(search('', 'empty')).toBeFalsy
	})
})