const bcrypt = require("bcrypt");

function hashPassword(plaintextPassword) {
  bcrypt
    .hash(plaintextPassword, 10)
    .then((hash) => {
      //console.log(hash);
      return hash;
    })
    .catch((err) => {
      console.log(err);
    });
}

function comparePassword(plaintextPassword) {
  let hash = "$2b$10$kyaFH3j6sg28d.qiei.Ye.ZeCIdXuVXgOCFRL3HDygoHQQ0wXHo1O";
  bcrypt
    .compare(plaintextPassword, hash)
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      console.log(err);
    });
}

// function hashPassword(plaintextPassword) {
//   bcrypt
//     .hash(plaintextPassword, 10)
//     .then((hash) => {
//       // Store hash in the database
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// }

module.exports = { hashPassword, comparePassword };

// export class Encrypter {
//   constructor() {}
//   static hashPassword(plaintextPassword) {
//     bcrypt
//       .hash(plaintextPassword, 10)
//       .then((hash) => {
//         console.log(hash);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }

//   static comparePassword(plaintextPassword) {
//     let hash = "$2b$10$kyaFH3j6sg28d.qiei.Ye.ZeCIdXuVXgOCFRL3HDygoHQQ0wXHo1O";
//     bcrypt
//       .compare(plaintextPassword, hash)
//       .then((result) => {
//         console.log(result);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }
// }

// module.exports = { Encrypter };
