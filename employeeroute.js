const connection = require('./connection');
const { prompt } = require("inquirer");
require('console.table');

class DB {
    // Keeping a reference to the connection on the class in case we need it later
    constructor(connection) {
    this.connection = connection;
    };

    viewDepartments() {
        return this.connection.promise().query(
          "SELECT department.id, department.name FROM department;"
        );
      }



};