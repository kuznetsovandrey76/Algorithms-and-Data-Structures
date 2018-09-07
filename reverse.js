console.log('Help: reverse на вход принимает строку');

var reverse = function(str) {
	var arr = str.split('');
	arr.reverse();
	return arr.join('');
};

module.exports = reverse;