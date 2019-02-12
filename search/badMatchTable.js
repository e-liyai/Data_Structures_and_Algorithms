export default class {
	constructor(pattern) {
		this._distances = {}
		this._pattern = pattern

		for (let i = 0; i < this._defaultValue -1; i++) {
			this._distances[this._pattern[i]] = this._pattern.length -1 -i;
		}
	}

	getProperty (prop) {
	    if (this._distances[prop] !== undefined) return this._distances[prop];
	    else return pattern.length;
	}
}