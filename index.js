const crypto = require('crypto');

function encode(text, key) {
    const mykey = crypto.createCipher('aes-128-cbc', key);
    let mystr = mykey.update(text, 'utf8', 'hex');
    mystr += mykey.final('hex');
    return mystr;
}

function decode(message, key) {
    const mykey = crypto.createDecipher('aes-128-cbc', key);
    let mystr = mykey.update(message, 'hex', 'utf8');
    mystr += mykey.final();
    return mystr;
}

const key = "MyUltraSecretKey";
let value = encode("MySecretMessage", key);
console.log(`El mensaje cifrado es: ${value}`);

value = decode(value, key);
console.log(`El mensaje original es: ${value}`);