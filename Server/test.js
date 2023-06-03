const bcrypt = require("bcrypt");

const fn = require("./Utilities/Encryption");
let hashed = fn.hashPassword("password132");
//let result = fn.comparePassword("123456", hashed);

console.log(hashed);
//console.log(result);
