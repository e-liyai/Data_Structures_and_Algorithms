import BadMatchTable from './badMatchTable'

const search = (pattern, toSearch) => {
	const badMatchTable = new BadMatchTable(pattern)
	let currentStartIndex = 0

	while(currentStartIndex <= toSearch.length - pattern.length) {
		let charactersLeftToMatch = pattern.length - 1 

		while(charactersLeftToMatch >= 0 &&
			pattern[charactersLeftToMatch] === toSearch[currentStartIndex + charactersLeftToMatch]) charactersLeftToMatch--

		if (charactersLeftToMatch < 0) {
			currentStartIndex += pattern.length
			return true
		}

		currentStartIndex += badMatchTable.getProperty(toSearch[currentStartIndex + pattern.length -1])
	}
	return false

}

module.exports = search