const inquirer = require('inquirer');
const fs = require('fs');
// const generateMarkdown = require('./lib/generateMarkdown')

const questions = [
    {
        type: 'input',
        name: 'username',
        message: 'What is your GitHub username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    },
    {
        type: 'input',
        name: 'project',
        message: "What is your project's name?",
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please write a short description of your project',
    },
    {
        type: 'list',
        name: 'license',
        message: 'What kind of license should your project have',
        choices: ['MIT License', 'ISC License', ' ']
    },
    {
        type: 'input',
        name: 'dependencies',
        message: 'What command should be run to install dependencies?',
    },
    {
        type: 'input',
        name: 'runCommand',
        message: 'What command should be run to run tests?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What does the user need to know about using the repo?',
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'What does the user need to know about contributing to the repo?',
    }

];

function writeToFile(fileName, data) {

    fs.writeFile(fileName, data, (err) =>
        err ? console.log(err) : console.log('Successfully created index.html!'));

}


function init() {
    inquirer
        .prompt(questions)
        .then((answers) => {

            const html = generateHtml(answers)

            writeToFile('./dist/index.html', html);

        })
}