const { publicEncrypt, privateDecrypt } = require('crypto');

const { publicKey, privateKey } = require('./keypair');

const encryptedData = publicEncrypt(publicKey);
