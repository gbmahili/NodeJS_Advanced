const fs = require('fs');
const { promisify } = require('util');
const writeFile = promisify(fs.writeFile);
const unlink = promisify(fs.unlink);

const beep = () => process.stdout.write('\x07');// Makes your Mac to beep...really...it does

const delay = seconds => new Promise(resolves => {
    setTimeout(resolves, seconds * 1000);
});

const doStuffSequentially = () => Promise.resolve()
    .then(() => console.log('Starting...'))
    .then(() => delay(1))
    .then(() => 'Waiting...')
    .then(console.log)
    .then(() => delay(2))
    .then(() => writeFile('file.txt', 'Testing more complex promises'))
    .then(beep)
    .then(() => 'file.txt created.')//this will return the text 'file.txt created'
    .then(console.log)//text returned above will be logged here
    .then(() => delay(3))
    .then(() => unlink('file.txt'))
    .then(beep)
    .then(()=>'file.txt removed.')
    .then(console.log)
    .catch(console.error)//will throw the first error to the console

doStuffSequentially();