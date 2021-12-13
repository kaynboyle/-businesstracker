const connection = require('./connection');
const { prompt } = require("inquirer");


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
          printEmployeePage();
          break;
      }
    });
  };
  
  ogPrompt();
  