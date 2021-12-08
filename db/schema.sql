DROP DATABASE IF EXISTS employees;

CREATE DATABASE employees;

USE employees;

CREATE TABLE department (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(30) NOT NULL
);

CREATE TABLE role (
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL,
    salary DECIMAL(30) NOT NULL,
    department_id INT NOT NULL,
    CONSTRAINT fk_department FOREIGN KEY (department_id) REFERENCES department (id)
);

CREATE TABLE employee (
    id INT PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    role_id INT NOT NULL,
    CONSTRAINT fk_role FOREIGN KEY (role_id) REFERENCES role (id),
    manager_id INT,
    CONSTRAINT fk_employee FOREIGN KEY (manager_id) REFERENCES employee (id)
);

INSERT INTO department (name) 
    VALUES 
        ("sales"),
        ("engineering"),
        ("human_resource");

INSERT INTO role (title, salary, department_id) 
    VALUES 
        ("sales_person", 75000, 1),
        ("engineering", 160000, 2),
        ("human_resource", 60000, 3);

INSERT INTO employee (first_name, last_name, role_id, manager_id) 
    VALUES 
        ("Kaylin", "Boyle", 2, NULL),
        ("Bob", "Freeman", 1, 1),
        ("Brian","Lee", 3, 1);