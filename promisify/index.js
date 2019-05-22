/**
 * With Promisify, since all node functions will put the error as a first argument of a callback
 * we can use promisify to catch those errors better.
 */

 // Require promisify from util...the function will accept a custom function to handle errors if any
 const { promisify } = require('util');

 const delay = (seconds, callback) => {
     if(seconds > 3) {
         callback(new Error(`${seconds} seconds it too long`));
     } else {
         setTimeout(() => {
             callback(null, `the ${seconds} second delay is over`);
         }, seconds);
     };
 };

 const promiseDelay = promisify(delay);//accepts a custom promisse

 promiseDelay(3)
 .then(console.log) // the 3 seconds delay is over
 .catch(error => console.log(`${error}`));

 promiseDelay(4)
 .then(console.log)
 .catch(error => console.log(`${error}`)); // Error: Error: 4 seconds is too long