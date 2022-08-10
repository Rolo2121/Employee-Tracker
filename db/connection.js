const mysql = require('mysql2');
const inquirer = require('inquirer');

// connect to database
const db = mysql.createConnection({
	host: 'localhost',
	// your MySQL username
	user: 'root',
	// your MySQL password
	password: 'password',
	database: 'employees',
});

module.exports = db;
