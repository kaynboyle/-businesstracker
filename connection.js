const mysql2 = require('mysql2');
const connection = require('./connection');
const { prompt } = require("inquirer");
require('console.table');

const connection = mysql2.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'employees'
});

// connection.connect((err) => {
//     if (err) throw err;
// });

// function viewAll(table, i){
//     if (i==1){

//     }
//     if (i==2){

//     }
//     else{

//     }
// ;}


module.exports = connection;