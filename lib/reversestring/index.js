const reversestring = function(str) {
	const arr = str.split('');
	arr.reverse();
	return arr.join('');
};

module.exports = reversestring;