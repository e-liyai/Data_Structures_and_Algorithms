import search from './boyerMooreHorspoolSearch'

describe('test naive search', () => {
	test('success test', () => {
		expect(search('man', 'woman')).boBeTruthy
	})

	test('fail check test', () => {
		expect(search('father', 'woman')).toBeFalsy
	})

	test('empty variable test', () => {
		expect(search('', 'empty')).toBeFalsy
	})

	test('test large string', () => {
		const searchString = 'WE HOLD THESE TRUTHS TO BE SELF-EVIDENT'
		expect(search('TRUTHS', searchString)).boBeTruthy
	})
})