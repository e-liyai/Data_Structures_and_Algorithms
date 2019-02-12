const search = (toFind, toSearch) => {
	if(toFind.length > 0 && toSearch.length > 0) {
		for(let startIndex = 0; startIndex < toSearch.length; startIndex++) {
			let matchCount = 0
			while (toSearch[startIndex + matchCount] === toFind[matchCount]) {
				matchCount++
				if(toFind.length === matchCount) return true
			}
		}
	}
	return false
}

module.exports = search