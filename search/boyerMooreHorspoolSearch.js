import BadMatchTable from './badMatchTable'

const search = (pattern, toSearch) => {
	const badMatchTable = BadMatchTable(pattern)
	let currentStartIndex = 0
	let charactersLeftToMatch = pattern.length - 1 

	while(charactersLeftToMatch >= 0 &&
		pattern[charactersLeftToMatch] === toSearch[currentStartIndex + charactersLeftToMatch]) charactersLeftToMatch--

	if (charactersLeftToMatch < 0) {
		currentStartIndex += pattern.length
		return true
	}

	currentStartIndex += badMatchTable._distances[toSearch[currentStartIndex + pattern.length -1]]

}