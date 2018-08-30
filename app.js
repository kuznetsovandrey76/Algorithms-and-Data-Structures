const express = require('express'),
	  app = express(),
	  port = 8080;

// Подключение модулей
const reversestring = require('./lib/reversestring');
console.log(reversestring('Hello, World!')); // !dlroW ,olleH

app.listen(process.env.PORT || port, () => 
	console.log(`Start: Ctrl + http://localhost:${port}\nEnd: Ctrl + C`)); 

