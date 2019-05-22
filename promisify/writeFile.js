// Bring in the file system module
const fs = require('fs');
// Bring in the promisify from the util object
const { promisify } = require('util');
// Create a custom callback function to write a file
const writeFile = promisify(fs.writeFile);
const logError = error => console.log('Error creating file', error)
//Use the new promiseFunction
writeFile('sample.txt', 'This is some new text to test the promisify')
    .then(() => console.log('Fille written successfully'))
    .catch(e=>logError(e));

const appendFile = promisify(fs.appendFile)
appendFile('sample.txt', ', Add this to the other file')
    .then(() => console.log('Done'))
    .catch(e=>logError(e));