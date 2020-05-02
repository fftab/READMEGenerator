// Importing File System
const fs = require("fs");
// Importing Path Package
const path = require("path");
// Importing Inquirer Package
const inquirer = require("inquirer");
// Importing API JavaScript
const api = require("./utils/api");
// Importing Generate Markdown JavaScript
const genMarkDown = require("./utils/generateMarkdown");

// Inquirer Prompts
const questions = [
    {
        // GitHub UN Prompt
        type: "input",
        name: "GitHub",
        message: "What is your GitHub username?"
    },
    {
        // Project Title Prompt
        type: "input",
        name: "ProjectTitle",
        message: "What is your project title?"
    },
    {
        // Project Description Prompt
        type: "input",
        name: "ProjectDescription",
        message: "Describe your project."
    },
    {
        // License Choice Prompt
        type: "list",
        name: "License",
        message: "What kind of license should your project have?",
        choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"]
    },
    {
        // Installation
        type: "input",
        name: "Installation",
        message: "What command should be run to install dependencies?",
        default: "npm i"
    },
    {
        // Usage Prompt
        type: "input",
        name: "Usage",
        message: "What does your user need to know about using this repo?"
    },
    {
        // Contribution Prompt
        type: "input",
        name: "Contributing",
        message: "What does the user need to know about contributing to the repo?"
    },
    {
        // Test Prompt
        type: "input",
        name: "Tests",
        message: "What commands shouold be run to run test?",
        default: "npm test"
    }
];

function writeToFile(fileName, data) {
    // writeFileSync is built in, .cwd = current working directory
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// Declaring Initialize
function init() {
    // Run Inquirer Prompts
    inquirer.prompt(questions)
    // THEN grab responses and perform anonymous arrow function
    .then((responses) => {
        // Run Get User Function (Given Answer to Prompt) on API
        api.getUser(responses.GitHub)
        // THEN grab data object and perform anonymous arrow function
        .then(({data}) => {
            // ======================> spread allows for responses from api and for data from inquirer
            writeToFile("README.md", genMarkDown({...responses, ...data}));
        });  
    });
}

// Calling Initialize
init();
