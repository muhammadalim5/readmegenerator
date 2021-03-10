// TODO: Include packages needed for this application


const inquirer = require('inquirer')

const fs = require('fs')

const generateMarkdown = require('./utils/generateMarkdown')

const util = require('util')

const writeFileAsync = util.promisify(fs.writeFile);

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

async function main() {
    try {
        const response = await promptUser();

        const readMeData = generateMarkdown(response);

        await writeFileAsync('README.md', readMeData);
        console.log('Successfully saved!');
    } catch (err) {
        console.log(err);
    }
}

// Function call to initialize app
main();


// TODO: Create a function to initialize app

function promptUser() {
    return inquirer.prompt(
        [
            {
                type: 'input',
                message: 'What is your project title?',
                name: 'title'
            },
            {
                type: 'input',
                message: 'Please enter a description !',
                name: 'description'
            },
            {
                type: 'input',
                message: 'What are the instructions for this project?',
                name: 'installation'
            },
            {
                type: 'input',
                message: 'How would you like to use this app?',
                name: 'usage'
            },
            {
                type: 'list',
                message: 'Please choose License!',
                choices: [
                    "Apache",
                    "MIT",
                    "ISC",
                    "None"
                ],
                name: 'license',
            },
            {
                type: 'input',
                message: 'Who contributed on project?',
                name: 'contributed',
            },
            {
                type: 'input',
                message: 'What are the Instruction?',
                name: 'Instruction'
            },
            {
                type: 'input',
                message: 'What is your GitHub username?',
                name: 'GitHubUsername'
            },
            {
                type: 'input',
                message: 'What is your GitHub email?',
                name: 'GitHubEmail'
            },

        ]
    )
}



