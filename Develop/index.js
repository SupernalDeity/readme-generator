const fs = require('fs');
const inquirer = require('inquirer');
const { listenerCount } = require('process');

const prompt = inquirer.createPromptModule();

prompt([ 
    {
        message: 'Enter the title of your project.',
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
        message: "Enter contributing guidelines for your project.",
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
    },
    {
        type: 'list',
        message: 'What type of license would you like?',
        choices: ['APM', 'AUR license', 'CPAN'],
        name: 'license'
    },
    {
        message: 'What color would you like for your lisence?',
        name: 'color'
    }
])

.then((answers) => {
    console.log(answers);

    let licenseLink = '';
    switch (answers.license) {
        case 'APM':
            licenseLink = `https://img.shields.io/badge/${answers.github}-MIT-${answers.color.toLowerCase()}`
            break;
        case 'AUR license':
            licenseLink = `https://img.shields.io/badge/${answers.github}-Apache-${answers.color.toLowerCase()}`
            break;
        case 'CPAN':
            licenseLink = `https://img.shields.io/badge/${answers.github}-lgpl__2__1-${answers.color.toLowerCase()}`
            break;
    };

    const template =
`# ${answers.title}

## License 
![license](${licenseLink})

## Table of Content
* [Description](#description)
* [Instructions](#instructions)
* [Visuals](#visuals)
* [Usage](#usage)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
    
## Description
${answers.description}

## Instructions
${answers.installation}

## Usage 
${answers.usage}

## Contributing
${answers.contributing}

## Tests 
${answers.tests}

## Questions
https://github.com/${answers.github} 
https://${answers.email} 
`;

    if (!fs.existsSync('./output')) {
        fs.mkdirSync('./output');
    }
    fs.writeFileSync('./output/generated.md', template);
});
