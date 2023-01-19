//HMAC is the same as hash but with a key added to it

//importing the HMAC function
const { createHmac } = require('crypto');

const key = '123password';
const message = 'The british are coming';


const hmac = createHmac('sha256', key).update(message).digest('hex');

console.log(hmac);
