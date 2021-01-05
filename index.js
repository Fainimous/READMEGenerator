// add dependencies
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

const writeFileAsync = util.promisify(fs.writeFile);

const generateMarkdown = require('./utils/generateMarkdown');
const { generate } = require('rxjs');

// array of questions for user
const questions = [
        {
            type: 'input',
            message: "What is your Project's title?",
            name: 'name',
        },
        {
            type: 'input',
            message: "Please enter a description for your project:",
            name: 'description',

        },
        {
            type: 'input',
            message: "Please enter the installation instructions for your project:",
            name: 'installation',
        },
        {
            type: 'input',
            message: "Please enter a usage description for your project:",
            name: 'usage',

        },
        {
            type: 'list',
            message: "Please select a license for your project:",
            name: 'license',
            choices: ['MIT License', 'Apache License 2.0', 'GNU GPLv3'],



        },
        {
            type: 'input',
            message: "Please enter how other users can contribute to your project:",
            name: 'contribute',

        },
        {
            type: 'input',
            message: "Please enter any testing details",
            name: 'testing',
        }
    ];


// function to initialize program
function init() {
    inquirer.prompt(questions)
        .then((response) => writeFileAsync(`${response.name}_README.md`, generateMarkdown(response)))
        .then(() => console.log('README was successfully created to projectTitle_README.md'))
        .catch((err) => console.error(err));
}

// function call to initialize program
init();
