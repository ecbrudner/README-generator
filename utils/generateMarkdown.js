// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license == 'MIT License'){
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
  } else if (license == 'Apache License 2.0'){
    return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
  } else if (license == 'GNU General Public License v3.0'){
    return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
  } else if (license == 'Boost Software License 1.0'){
    return '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)'
  } else if (license == 'None'){
    return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license == 'MIT License'){
    return 'https://api.github.com/licenses/mit'
  } else if (license == 'Apache License 2.0'){
    return 'https://api.github.com/licenses/apache-2.0'
  } else if (license == 'GNU General Public License v3.0'){
    return 'https://api.github.com/licenses/gpl-3.0'
  } else if (license == 'Boost Software License 1.0'){
    return 'https://api.github.com/licenses/bsl-1.0'
  } else if (license == 'None'){
    return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license == 'MIT License'){
    return 'This project is licensed under the MIT License.'
  } else if (license == 'Apache License 2.0'){
    return 'This project is licensed under the Apache License 2.0.'
  } else if (license == 'GNU General Public License v3.0'){
    return 'This project is licensed under the GNU General Public License v3.0.'
  } else if (license == 'Boost Software License 1.0'){
    return 'This project is licensed under the Boost Software License 1.0.'
  } else if (license == 'None'){
    return '';
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  ## Description 
  ${data.description}
  ## Table of Contents
  * [Installation](#Installation)
  * [Usage](#Usage)
  * [How to Contribute](#How-to-Contribute)
  * [Tests](#Tests)
  * [License](#License)
  * [Questions](#Questions)
  ## Installation 
  ${data.installation}
  ## Usage 
  ${data.usage}
  ## License 
  ${renderLicenseSection(data.license)}
  ${renderLicenseLink(data.license)}
  ## How to Contribute 
  ${data.contribution}
  ## Tests 
  ${data.test}
  ## Questions 
  You can visit my [GitHub profile](https://github.com/${data.github})
   or reach me at ${data.email} with any additional questions.
`;
}

module.exports = generateMarkdown;
