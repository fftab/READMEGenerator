function generateMarkdown(data) {
  return `
# ${data.ProjectTitle}
[![star this repo](https://githubbadges.com/star.svg?user=fftab&repo=READMEGenerator&style=default)](https://github.com/fftab/READMEGenerator)
[![fork this repo](https://githubbadges.com/fork.svg?user=fftab&repo=READMEGenerator&style=default)](https://github.com/fftab/READMEGenerator/fork)
## Description

${data.ProjectDescription}

## Table of Contents 
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
## Installation
To install necessary dependencies, run the following command
${data.Installation}
## Usage
${data.Usage}
## License
${data.License}
## Contributing
${data.Contributing}
## Test
To run tests, run the following command:
${data.Tests}
## Questions
<img src="${data.avatar_url}" alt="github avatar" style="border-radius: 16px" width="30"/>

If you have any questions about the repo, please contact
${data.GitHub} @ ${data.email}
`;
}

// Set File Up for Export
module.exports = generateMarkdown;
