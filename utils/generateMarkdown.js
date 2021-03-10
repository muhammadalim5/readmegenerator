// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license !== 'None') {
        return `![GitHub license](https://img.shields.io/badge/license-${license}2.0-blue.svg)\n`;
    }
    return '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string

function renderLicenseLink(license) {
    if (license !== 'None') {
        return `\n* [License](#license)\n`;
    }
    return '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string

function renderLicenseSection(license) {
    if (license !== 'None') {
        return `## License
        This project is licensed under the ${license} license.

        Copyright (c) 2011-2020 Muhammad Alim

`
    }
    return '';
}

// TODO: Create a function to generate markdown for README

// var link = `https://opensourse.org/licenses/${data.license}`

function generateMarkdown(data) {
    // ! [GitHub License](https://img.shields.io/badge/license-${data.license}2.0-blue.svg )


    return `
<h1> #${data.title} </h1>

${renderLicenseBadge(data.license)}

<h1>  Table of Contents </h1>

* [Description](#description)\n
* [Installation](#installation)\n  
* [Usage](#usage)\n
${renderLicenseLink(data.license)}\n 
* [Constributing](#constributing)\n
* [Test](#test)\n
* [Questions](#Questions)\n

   

## Description
${data.description}
## Installation:
${data.installation}             
## Usage:
${data.usage}            
## Constributing:
${data.contributed} 
## Test:
 ${data.Instruction}\n

${renderLicenseSection(data.license)}
            
            
## Questions:

For questions about the Generator you can go to my 
GitHub page at the following Link:

-[GitHub Profile](https://github.com/${data.GitHubUsername})    

For additional questions please reach out to my eamil at: ${data.GitHubEmail}

`;
}

module.exports = generateMarkdown;
