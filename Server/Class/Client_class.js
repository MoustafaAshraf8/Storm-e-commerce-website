// var express = require("express");
// const { Pool } = require("pg");

// class Client {
//   #clientID;
//   #Name;
//   #Email;
//   #Password;
//   #Phone;
//   #Address;

//   // constructors
//   constructor() {}
//   //   constructor(clientID, Name, Email, Password, Phone, Address) {
//   //       this.clientID = clientID;
//   //       this.Name = Name;
//   //       this.Email = Email;
//   //       this.Password = Password;
//   //       this.Phone = Phone;
//   //       this.Address = Address;
//   //   }

//   // setters and getters
//   setName(Name) {
//     this.Name = Name;
//     0;
//   }
//   getName() {
//     return this.Name;
//   }

//   setEmail(Email) {
//     this.Email = Email;
//   }
//   getEmail() {
//     return this.Email;
//   }
//   setPassword(Password) {
//     this.Password = Password;
//   }
//   getPassword() {
//     return this.Password;
//   }
//   setPhone(Phone) {
//     this.Phone = Phone;
//   }
//   getPhone() {
//     return this.Phone;
//   }
//   setAddress(Address) {
//     this.Address = Address;
//   }
//   getAddress() {
//     return this.Address;
//   }

//   createClient(Name, Email, Password, Phone, Address) {
//     // create client
//     const pool = new Pool({
//       host: process.env.POSTGRESS_HOST,
//       user: process.env.POSTGRESS_USER,
//       port: process.env.POSTGRESS_PORT,
//       password: process.env.POSTGRESS_PASSWORD,
//       database: process.env.POSTGRESS_DATABASE,
//     });

//     let query = `INSERT INTO client (name, email, password, phone, address) VALUES ('${Name}', '${Email}', '${Password}', '${Phone}', '${Address}')`;
//     pool
//       .query(query)
//       .then((result) => {
//         console.log(result);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }
// }

// module.exports = { Client };
