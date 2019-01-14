function permutation(str){
	permutation(str, "");

	function permutation(str, prefix) {
		if(str.length === 0) console.log(prefix)
		else {
			for (let i= 0; i < str.length; i++) {
				let reminder = str.substring(0, i) + str.substring(i + 1)
				permutation(reminder, prefix + str.charAt(i));
			}
		}
	}
}

module.exports = permutation