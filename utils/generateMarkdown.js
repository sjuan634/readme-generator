function renderLicenseBadge(license) {
  let licBadge = ``;
  switch (license) {
    case 'Apache License 2.0':
      licBadge = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](${renderLicenseLink(license)})`;
      break;
    case 'GNU General Public License v3.0':
      licBadge = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](${renderLicenseLink(license)})`;
      break;
    case 'MIT License':
      licBadge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](${renderLicenseLink(license)})`;
      break;
    case 'BSD 2-Clause "Simplified" License':
      licBadge = `[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](${renderLicenseLink(license)})`;
      break;
    case 'BSD 3-Clause "New" or "Revised" License':
      licBadge = `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](${renderLicenseLink(license)})`;
      break;
    case 'Boost Software License 1.0':
      licBadge = `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](${renderLicenseLink(license)})`;
      break;
    case 'Creative Commons Zero v1.0 Universal':
      licBadge = `[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](${renderLicenseLink(license)})`;
      break;
    case 'Eclipse Public License 1.0':
      licBadge = `[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](${renderLicenseLink(license)})`;
      break;
    case 'GNU Affero General Public License v3.0':
      licBadge = `[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](${renderLicenseLink(license)})`;
      break;
    case 'GNU General Public License v2.0':
      licBadge = `[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](${renderLicenseLink(license)})`;
      break;
    case 'GNU Lesser General Public License v3.0':
      licBadge = `[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](${renderLicenseLink(license)})`;
      break;
    case 'Mozilla Public License 2.0':
      licBadge = `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](${renderLicenseLink(license)})`;
      break;
    case 'The Unlicense':
      licBadge = `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](${renderLicenseLink(license)})`;
      break;
    default:
      licBadge = '';
  }

  return licBadge;
}

function renderLicenseLink(license) {
  let licLink = ``;
  switch (license) {
    case 'Apache License 2.0':
      licLink = `https://opensource.org/licenses/Apache-2.0`;
      break;
    case 'GNU General Public License v3.0':
      licLink = `https://www.gnu.org/licenses/gpl-3.0`;
      break;
    case 'MIT License':
      licLink = `https://opensource.org/licenses/MIT`;
      break;
    case 'BSD 2-Clause "Simplified" License':
      licLink = `https://opensource.org/licenses/BSD-2-Clause`;
      break;
    case 'BSD 3-Clause "New" or "Revised" License':
      licLink = `https://opensource.org/licenses/BSD-3-Clause`;
      break;
    case 'Boost Software License 1.0':
      licLink = `https://www.boost.org/LICENSE_1_0.txt`;
      break;
    case 'Creative Commons Zero v1.0 Universal':
      licLink = `http://creativecommons.org/publicdomain/zero/1.0/`;
      break;
    case 'Eclipse Public License 1.0':
      licLink = `https://opensource.org/licenses/EPL-1.0`;
      break;
    case 'GNU Affero General Public License v3.0':
      licLink = `https://www.gnu.org/licenses/gpl-3.0`;
      break;
    case 'GNU General Public License v2.0':
      licLink = `https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html`;
      break;
    case 'GNU Lesser General Public License v3.0':
      licLink = `https://www.gnu.org/licenses/lgpl-3.0`;
      break;
    case 'Mozilla Public License 2.0':
      licLink = `https://opensource.org/licenses/MPL-2.0`;
      break;
    case 'The Unlicense':
      licLink = `http://unlicense.org/`;
      break;
    default:
      licLink = '';
  }

  return licLink;
}


function renderLicenseSection(license) {
  let licenseSec = '';
  !license ? licenseSec = 'N/A' : licenseSec =`This project is covered under the ${license} license. To learn more about what this means, click the license button at the top.`
  return licenseSec
}


function generateMarkdown(data) {
  return `# ${data.projTitle}

${renderLicenseBadge(data.projLic)}

## Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Licenses](#licenses)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  
## Description
${data.projDesc}

## Installation
${data.projInstall}

## Usage
${data.projUsage}

## Licenses
${renderLicenseSection(data.projLic)}

## Contributing
${data.projContribute}

## Tests
${data.projTest}

## Questions
Have questions about this project?  
GitHub: https://github.com/${data.github}  
Email: ${data.email}
`;
}

module.exports = generateMarkdown;