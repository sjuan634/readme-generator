const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [{
  type: 'input',
  name: 'projTitle',
  message: `Enter your project's title`
},
{
  type: 'input',
  name: 'projDesc',
  message: `Enter a description of your project.
Use the following questions as a guide:

- What was your motivation?
- Why did you build this project? (Note: the answer is not "Because it was a homework assignment.")
- What problem does it solve?
- What did you learn?`
},
{
  type: 'input',
  name: 'projInstall',
  message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.'
},
{
  type: 'input',
  name: 'projUsage',
  message: 'Provide instructions on how to use the project'
},
{
  type: 'confirm',
  name: 'confirmLic',
  message: `Do you want to add a license to your project?
If you need help choosing a license, refer to https://choosealicense.com/`
},
{
  type: 'list',
  name: 'projLic',
  message: `Choose a license.
If you need help choosing a license, refer to https://choosealicense.com/`,
  choices: ['Apache License 2.0',
            'GNU General Public License v3.0',
            'MIT License',
            'BSD 2-Clause "Simplified" License',
            'BSD 3-Clause "New" or "Revised" License',
            'Boost Software License 1.0',
            'Creative Commons Zero v1.0 Universal',
            'Eclipse Public License 2.0',
            'GNU Affero General Public License v3.0',
            'GNU General Public License v2.0',
            'GNU Lesser General Public License v2.1',
            'Mozilla Public License 2.0',
            'The Unlicense'],
  when: (answers) => answers.confirmLic === true
},
{
  type: 'input',
  name: 'projTest',
  message: 'Provide any tests for you project.'
},
{
  type: 'input',
  name: 'github',
  message: 'Enter your Github username?'
},
{
  type: 'email',
  name: 'email',
  message: 'Enter your email'
}];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions);
}

// Function call to initialize app
init();
