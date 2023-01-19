//imports crypto from node
const { createHash } = require('crypto');

//Function for hashing a string
function hash(string) {
    return createHash('sha256').update(string).digest('hex');
}

const x = hash('Andrew');

console.log(x);

let y = '23442';
let g = 'jv fr v';

console.log(`${y}:${g}`);