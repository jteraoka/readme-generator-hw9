//Package Install//
const inquirer = require("inquirer");
const fs = require("fs");
const { title } = require("process");

//Question Array//
inquirer.prompt([
    {
      type: "input",
      name: "title",
      message: "Please enter the title of your project:"
    },
    {
        type: 'list',
        name: 'description',
        message: 'Choose a description for your project:',
        choices: ['Suspicious', 'Discerning', 'Passionate']
    },
    {
      type: 'list',
      name: 'license',
      message: 'Please select a license:',
      choices: ['Apache 2.0', 'GNU GPLv3', 'MIT']
    },
    {
      type: 'list',
      name: 'installation',
      message: 'Please enter any instructions required for installation:',
      choices: ["Don't.", "Shouldn't.", "Wouldn't."]
    },
    {
      type: 'list',
      name: 'usage',
      message: 'Please describe the intended usage for the project:',
      choices: ['Making Mistakes.', 'Big Whoopsies.', 'Nuh Uh Uh.']
    },
    {
      type: 'list',
      name: 'contributing',
      message: 'Please enter any instructions on how to contribute to this project:',
      choices: ['FORWARD CHAINMAIL', 'DEPLOY SPIDERS.', 'A THIRD THING.']
    },
    {
      type: 'list',
      name: 'tests',
      message: 'Please enter any tests available for this project:',
      choices: ['Just Kidding.', 'That Was A Joke.', "Sometimes Jokes Aren't Funny."]
    },
    {
      type: 'list',
      name: 'questions',
      message: 'Please enter your GitHub username/any contact info you wish to include:',
      choices: ["Don't Contact Us.", "We'll", 'Contact You.']
    },
    ])
//Promise//
.then(({
    title, description, license, installation, usage, contributing, tests, questions
    }) => { 
  
//License Decision//
let badge = ""
    if (license === "Apache 2.0") {
      license = "Apache 2.0 https://choosealicense.com/licenses/apache-2.0/"
      badge = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
    } else if (license === "GNU GPLv3") {
      license = "GNU GPLv3 https://choosealicense.com/licenses/gpl-3.0/"
      badge = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
    } else {
      license = "MIT https://choosealicense.com/licenses/mit/"
      badge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
    }

//Table Of Contents//
var contents = 
`
1. [LICENSE](#license)
2. [INSTALLATION](#installation)
3. [USAGE](#usage)
4. [CONTRIBUTING](#contributing)
5. [TESTS](#tests)
6. [QUESTIONS](#questions)
`


//Template Filling//
const template = 
`${badge}
## TITLE
${title}

## DESCRIPTION
${description}

## TABLE OF CONTENTS
${contents}

## LICENSE
${license}

## INSTALLATION
${installation}

## USAGE
${usage}

## CONTRIBUTING
${contributing}

## TESTS
${tests}

## QUESTIONS
${questions}
`


//Write File//
  const fileName = `${title.toLowerCase().split(' ').join('')}_README.md`;
    fs.writeFile(fileName, template, (err) =>
        err ? console.log(err) : console.log(template)
        )
})
