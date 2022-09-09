const fs = require('fs');
const inquirer = require('inquirer');

prompt([ 
    {
        message: 'Enter the title for your project.',
        name: 'title'
    },
    {
        message: 'Enter the desription of your project.',
        name: 'description'
    },
    {
        message: 'Enter the installation guide for your project.',
        name: 'installation'
    },
    {
        message: 'Enter the usage of your project.',
        name: 'usage'
    },
    {
        message: "Enter a contributing guideline.",
        name: 'contributing'
    },
    {
        message: 'Enter your project\'s tests.',
        name: 'tests'
    },
    {
        message: 'What is your GitHub username?',
        name: 'github'
    },
    {
        message: "What is your email?",
        name: 'email'
    }
]);










// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
