const inquirer = require('inquirer');
const fs = require('fs');

const Employee = require('./lib/employee')
const Manager = require('./lib/manager')
const Intern = require('./lib/intern')
const Engineer = require('./lib/engineer')

const generateHtml = require('./src/generateHtml')

let employees = []

const nextQuestion = {
    type:'list',
    name:'next',
    message:'Which employee do you want to add next?',
    choices:['Intern', 'Engineer', "Finish adding employees"]
}

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
        name: 'gitHub',
        message: "What is their GitHub username?",
    },
];

function writeToFile(fileName, data) {

    fs.writeFile(fileName, data, (err) =>
        err ? console.log(err) : console.log('Successfully created autoindex.html!'));

}

function promptManagerQuestions() {
    inquirer
        .prompt(managerQuestions)
        .then((answers) => {

            const managerDetail = new Manager(answers.name, answers.id, answers.email, answers.officeNumber)
            employees.push(managerDetail)

            promptNextQuestion()
        })
}

function promptNextQuestion() {
    inquirer
        .prompt(nextQuestion)
        .then((answers) => {
            if(answers.next === 'Intern') {
                promptInternQuestion();
            } else if (answers.next === 'Engineer') {
                promptEngineerQuestion();
            } else {
                const generate = generateHtml(employees)

                writeToFile('./dist/autoindex.html', generate)
            }
        })
}

function promptInternQuestion() {
    inquirer  
        .prompt(internQuestions)
        .then((answers) => {

            const internDetail = new Intern(answers.name, answers.id, answers.email, answers.school)
            employees.push(internDetail)

            promptNextQuestion();
        })
}

function promptEngineerQuestion() {
    inquirer
        .prompt(engineerQuestions)
        .then((answers) => {

            const engineerDetail = new Engineer(answers.name, answers.id, answers.email, answers.gitHub)
            employees.push(engineerDetail)

            promptNextQuestion()
        })
}

promptManagerQuestions()
