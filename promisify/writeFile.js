// Bring in the file system module
const fs = require('fs');
// Bring in the promisify from the util object
const { promisify } = require('util');
// Create a custom callback function to write a file
const writeFile = promisify(fs.writeFile);

//Use the new promiseFunction
writeFile('sample.txt', 'This is some new text to test the promisify')
    .then(() => console.log('Fille written successfully'))
    .catch(error => console.log('Error creating file', error));