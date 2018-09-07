console.log('maxChar: самый часто встречающийся символ в строке');
console.log('help: maxChar на вход принимает строку');

var maxChar = function(str) {
	var charMap = {};
	var max = 0;

	for (var i in str.split('')) {
		if (charMap.hasOwnProperty(str[i])) {
			charMap[str[i]] += 1;
		} else {
			charMap[str[i]] = 1;
		}
	}

	for (var i in charMap) {
		if (charMap[i] > max) {
			max = charMap[i];
			maxChar = i;
		}
	}
	
	return maxChar;
};

module.exports = maxChar;