console.log('fizzbuzz: если число делится на 3 - fizz, на 5 - buzz, на 3 и на 5 - fizzbuzz');
console.log('help: на вход принимает число');

var fizzbuzz = function(num) {
	for (var i = 1; i <= num; i++) {
		if (i % 15 === 0) console.log('fizzbuzz');
		else if (i % 5 === 0) console.log('buzz');
		else if (i % 3 === 0) console.log('fizz');
		else console.log(i);	
	}
};

module.exports = fizzbuzz;