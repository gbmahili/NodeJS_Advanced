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
    .then(() => 'file.txt removed.')
    .then(console.log)
    .catch(console.error)//will throw the first error to the console

// Async Await 
const doStuffSequentiallyAsync = async () => {
    try {
        console.log('Starting...');
        await delay(1);
        console.log('Waiting...');
        await delay(2);
        await writeFile('file.txt', 'Testing more complex promises');
        beep();
        console.log('file.txt created.');
        await delay(3);
        await unlink('file.txt');
        beep();
        console.log('file.txt removed.');
    } catch (error) {
        console.log(error)
    }
}

//doStuffSequentially();
// doStuffSequentiallyAsync();

Promise.all([
    delay(2),
    delay(5),
    delay(3),
]).then(()=>console.log('All promises have been resolved.'))