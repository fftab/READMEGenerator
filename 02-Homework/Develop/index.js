const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const api = require("./utils/api");
const genMarkDown = require("./utils/generateMarkdown");

const questions = [
    {
        type: "input",
        name: "GitHub",
        message: "What is your GitHub username?"
    },
    {
        type: "input",
        name: "ProjectTitle",
        message: "What is your project title?"
    },
    {
        type: "input",
        name: "ProjectDescription",
        message: "Describe your project."
    },
    {
        type: "list",
        name: "License",
        message: "What kind of license should your project have?",
        choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"]
    },
    {
        type: "input",
        name: "Installation",
        message: "What command should be run to install dependencies?",
        default: "npm i"
    },
    {
        type: "input",
        name: "Usage",
        message: "What does your user need to know about using this repo?"
    },
    {
        type: "input",
        name: "Contributing",
        message: "What does the user need to know about contributing to the repo?"
    },
    {
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

function init() {
    inquirer.prompt(questions)
    .then((responses) => {
        api.getUser(responses.GitHub)
        .then(({data}) => {
            // spread ======================>allows for responses from api and for data from inquirer
            writeToFile("README.md", genMarkDown({...responses, ...data}));
        });  
    })
   
}

init();
