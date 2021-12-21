//const mysql2 = require('mysql2');
const connection = require("./connection");
const { prompt } = require("inquirer");
require("console.table");

// const connection = mysql2.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: 'password',
//     database: 'employees'
// });

//module.exports = connection;
// const connection = require('./connection');
//const { prompt } = require("inquirer");
// const temp = require('./employeeroute.js');

const ogPrompt = () => {
  prompt([
    {
      type: "list",
      name: "choice",
      message: "What do you want to do?",
      choices: [
        "View All Departments",
        "View All Roles",
        "View All Employees",
        "Add a Department",
        "Add a Role",
        "Update an Employee Role",
        "View Employees by Manager",
        "View Employees by Role",
        "Add an Employee"
      ],
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
      case "Update an Employee Role":
        updateEmployeeRole();
        break;
      case "Add a Role":
        addRole();
        break;
      case "View Employees by Manager":
        viewEbyM();
        break;
      case "View Employees by Role":
        viewEbyR();
        break;
      case "Add an Employee":
          addEmployee();
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
  connection.query(`SELECT * FROM department`, (error, result) => {
    if (error) {
      console.log(error);
    } else {
      console.table(result);
    }
    ogPrompt();
  });
}
function viewRoles() {
  connection.query(`SELECT * FROM role`, (error, result) => {
    if (error) {
      console.log(error);
    } else {
      console.table(result);
    }
    ogPrompt();
  });
}
function viewEmployees() {
  connection.query(`SELECT * FROM employee`, (error, result) => {
    if (error) {
      console.log(error);
    } else {
      console.table(result);
    }
    ogPrompt();
  });
}
function addDepartment() {
  prompt([
    {
      type: "input",
      name: "departmentAdded",
      message: "What is the name of the department?",
    },
  ]).then(({ departmentAdded }) => {
    connection.query(
      `INSERT INTO department (name) VALUES ('${departmentAdded}')`,
      (error, result) => {
        if (error) {
          console.log(error);
          ogPrompt();
        } else {
          console.table(result);
          ogPrompt();
        }
      }
    );
  });
}
function addRole() {
  prompt([
    {
      type: "input",
      name: "title",
      message: "What is role title?",
    },
    {
      type: "input",
      name: "salary",
      message: "What is role salary?",
    },
    {
      type: "input",
      name: "department_id",
      message: "What is role department_id?",
    },
  ]).then(({ title, salary, department_id }) => {
    connection.query(
      `INSERT INTO role (title, salary, department_id) VALUES ('${title}','${salary}','${department_id}')`,
      (error, result) => {
        if (error) {
          console.log(error);
          ogPrompt();
        } else {
          console.table(result);
          ogPrompt();
        }
      }
    );
  });
}
function updateEmployeeRole() {
  prompt([
    {
      type: "input",
      name: "employee_id",
      message: "What is employee id?",
    },
    {
      type: "input",
      name: "role_id",
      message: "What is the desired role change?",
    },
  ]).then(({ employee_id, role_id }) => {
    connection.query(
      `UPDATE employee SET role_id = ${role_id} WHERE id = ${employee_id}`,
      (error, result) => {
        if (error) {
          console.log(error);
          ogPrompt();
        } else {
          console.table(result);
          ogPrompt();
        }
      }
    );
  });
}
function viewEbyM() {
    prompt([
        {
          type: "input",
          name: "manager_id",
          message: "What is the manager's employee id?",
        }
      ]).then(({manager_id}) => {
        connection.query(
          `SELECT * FROM employee WHERE manager_id = ${manager_id}`,
          (error, result) => {
            if (error) {
              console.log(error);
              ogPrompt();
            } else {
              console.table(result);
              ogPrompt();
            }
          }
        );
      });
}
function viewEbyR(){
    prompt([
        {
          type: "input",
          name: "role_id",
          message: "What is the role id of the department you want to view?",
        }
      ]).then(({role_id}) => {
        connection.query(
          `SELECT * FROM employee WHERE role_id = ${role_id}`,
          (error, result) => {
            if (error) {
              console.log(error);
              ogPrompt();
            } else {
              console.table(result);
              ogPrompt();
            }
          }
        );
      });
     
}
function addEmployee(){
    prompt([
        {
          type: "input",
          name: "first_name",
          message: "What is the first name of the employee you want to add?",
        },
        {
            type: "input",
            name: "last_name",
            message: "What is the last name of the employee you want to add?",
          },
          {
            type: "input",
            name: "role_id",
            message: "What is the role id of the employee you want to add?",
          },
          {
            type: "input",
            name: "manager_id",
            message: "What is the manager id of the employee you want to add?",
          },
      ]).then(({first_name, last_name, role_id, manager_id }) => {
        connection.query(
          `INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('${first_name}', '${last_name}', '${role_id}','${manager_id}')`,
          (error, result) => {
            if (error) {
                console.log(error);
            } 
            viewEmployees();
            ogPrompt();
          }
        );
      });
}