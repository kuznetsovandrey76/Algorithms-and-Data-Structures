console.log('chunk: разбить массив на несколько массивов в зависимости от заданного размера');
console.log('help: на вход принимает - массив, число');

var chunk = function(array, size) {
	var chunked = [];
	var i = 0;

	while (i < array.length) {
		chunked.push(array.slice(i, size + i))
		i += size;		
	}
	
	return chunked;
};

module.exports = chunk;