const fs = require('fs');
const inquirer = require('inquirer');

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
        message: "Enter  contributing guideline for your project.",
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
]).then((answers) => {
    console.log(answers);
    const template =
`# ${answers.title}

## License 
    
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
${answers.email} 
`;

    if (!fs.existsSync('./output')) {
        fs.mkdirSync('./output');
    }
    fs.writeFileSync('./output/generated.md', template);
});
