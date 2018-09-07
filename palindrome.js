console.log('palindrome: текст, одинаково читающийся в обоих направлениях');
console.log('help: palindrome на вход принимает строку');

var palindrome = function(str) {
	var reversed = str
		.split('')
		.reverse()
		.join('');

	return str === reversed;
}

module.exports = palindrome;