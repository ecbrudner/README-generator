// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },

    {
        type: 'input',
        name: 'description',
        message: 'Please enter a description of your project.',
    },

    {
        type: 'input',
        name: 'installation',
        message: 'Please enter any installation instructions for your project.',
    },

    {
        type: 'input',
        name: 'usage',
        message: 'Please enter the usage information for your project.',
    },

    {
        type: 'input',
        name: 'contribution',
        message: 'Please enter any contribution guidelines for your project.',
    },

    {
        type: 'input',
        name: 'test',
        message: 'Please enter any test instructions for your project.',
    },

    {
        type: 'list',
        name: 'license',
        message: 'Please select a license for your project.',
        choices: ['MIT License', 'Apache License 2.0', 'GNU General Public License v3.0', 'Boost Software License 1.0', 'None'],
    },

    {
        type: 'input',
        name: 'github',
        message: 'Please enter your GitHub username.',
    },

    {
        type: 'input',
        name: 'email',
        message: 'Please enter your email address.',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(fileName, data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        writeToFile('CUSTOM_README.md', generateMarkdown(answers));
    });
}

// Function call to initialize app
init();
