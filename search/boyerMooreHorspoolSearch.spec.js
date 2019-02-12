import search from './boyerMooreHorspoolSearch'

describe('test naive search', () => {
	test('success test', () => {
		expect(search('man', 'woman')).b
	})

	test('fail check test', () => {
		expect(search('father', 'woman')).toBeFalsy
	})

	test('empty variable test', () => {
		expect(search('', 'empty')).toBeFalsy
	})
})