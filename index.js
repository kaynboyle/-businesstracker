
const mysql2 = require('mysql2');
// const connection = require('./connection');
// const { prompt } = require("inquirer");
require('console.table');

const connection = mysql2.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'employees'
});



module.exports = connection;
// const connection = require('./connection');
const { prompt } = require("inquirer");
// const temp = require('./employeeroute.js');

const ogPrompt = () => {
    prompt([
      {
        type: "list",
        name: "choice",
        message: "What do you want to do?",
        choices: ["View All Departments", "View All Roles","View All Employees","Add a Department", "Add a Role","Update an Employee Role"],
      },
    ]).then(({ choice }) => {
      switch (choice) {
        case "View All Departments":
            viewDepartments();
            break;
        case "View All Roles":
            viewRoles();
            break;
        case "View All Employees":
            viewEmployees();
            break;
        case "Add a Department":
            addDepartment();
            break;
        case "Update Employee Role":
            updateEmployeeRole();
            break;
        case "Add a Role":
            addRole();
            break;
        default:
            //change
          break;
      }
    });
  };
  
  ogPrompt();

function viewDepartments() {
    //   return console.log("here");
    connection.query((`SELECT * FROM department`), (error, result) => {
        if(error){
            console.log(error)}
        else{ 
            console.table(result);
        }
    ogPrompt();
    })};
function viewRoles(){
    connection.query((`SELECT * FROM role`), (error, result) => {
        if(error){
            console.log(error)}
        else{ 
            console.table(result);
        }
    ogPrompt();
    })};
function viewEmployees(){
    connection.query((`SELECT * FROM employee`), (error, result) => {
        if(error){
            console.log(error)}
        else{ 
            console.table(result);
        }
    ogPrompt();
    })};
function addDepartment(){ 
    prompt([
        {
          type: "input",
          name: "departmentAdded",
          message: "What is the name of the department?",
        }
    ]).then(({departmentAdded})=>{
        connection.query(`(INSERT INTO department SET name = ${departmentAdded})`), (error, result) => {
        if(error){
            console.log(error)
            ogPrompt();
        }
        else{ 
            console.table(result);
            ogPrompt();
        }
    }
    })  
    };


