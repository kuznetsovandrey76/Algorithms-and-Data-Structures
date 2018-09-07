console.log('reverse - написать строку в обратном порядке');
console.log('help: на вход принимает строку');

// update 1. solution
var reverse = function(str) {
	return str 
		.split('')
		.reverse()
		.join('');
};

// 1. solution
// var reverse = function(str) {
// 	var arr = str.split('');
// 	arr.reverse();
// 	return arr.join('');
// };

module.exports = reverse;