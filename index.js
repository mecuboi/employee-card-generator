const inquirer = require('inquirer');
const fs = require('fs');

const Employee = require('./lib/employee')
const Manager = require('./lib/manager')
const Intern = require('./lib/intern')
const Engineer = require('./lib/engineer')

const generateHtml = require('./src/generateHtml')

let manager = []
let intern = []
let engineer = []

const managerQuestions = [
    {
        type: 'input',
        name: 'name',
        message: "What is the manager's full name?",
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is their employee id?',
    },
    {
        type: 'input',
        name: 'email',
        message: "What is their email address?",
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: "What is their work phone number?",
    },
];

const internQuestions = [
    {
        type: 'input',
        name: 'name',
        message: "What is the intern's full name?",
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is their employee id?',
    },
    {
        type: 'input',
        name: 'email',
        message: "What is their email address?",
    },
    {
        type: 'input',
        name: 'school',
        message: "What is the name of their current school?",
    },
];

const engineerQuestions = [
    {
        type: 'input',
        name: 'name',
        message: "What is the engineer's full name?",
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is their employee id?',
    },
    {
        type: 'input',
        name: 'email',
        message: "What is their email address?",
    },
    {
        type: 'input',
        name: 'school',
        message: "What is their GitHub username?",
    },
];

function writeToFile(fileName, data) {

    fs.writeFile(fileName, data, (err) =>
        err ? console.log(err) : console.log('Successfully created autoreadme.md!'));

}

function init() {
    inquirer
        .prompt(managerQuestions)
        .then((answers) => {

            managerDetail = new Manager(answers.name, answers.id, answers.email, answers.officeNumber)
            manager.push()

        })
}

init()
