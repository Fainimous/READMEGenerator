// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.name}

  ## Description 
  
  ${data.description}
  
  
  ## Table of Contents 
  
  
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  
  
  ## Installation
  
  ${data.installation}
  
  
  ## Usage 
  
  ${data.usage}
   
  ## License

  ${data.license}

  ## Contributing
  
  ${data.contribute}
  
  ## Tests
  
  ${data.testing}

`;
}

module.exports = generateMarkdown;
