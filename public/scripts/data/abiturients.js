// class Abiturient {
//   id;
//   firstname;
//   lastname;
//   patronymic;
//   pointsNumber;
//   facultyName;
//   specialityName;

//   constructor(abiturientInfo) {
//     this.id = abiturientInfo.id;
//     this.firstname = abiturientInfo.firstname;
//     this.lastname = abiturientInfo.lastname;
//     this.patronymic = abiturientInfo.patronymic;
//     this.pointsNumber = abiturientInfo.pointsNumber;
//     this.facultyName = abiturientInfo.facultyName;
//     this.specialityName = abiturientInfo.specialityName;
//   }
// }

let abiturients = [];
const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Shadyman6",
  database: "usersdb",
});

connection.query("SELECT * FROM users", function (err, results, fields) {
  abiturients = results;
  console.log(abiturients);
  const fs = require("fs");
  fs.writeFileSync("./j_1.json", JSON.stringify(abiturients), {
    encoding: "utf8",
    flag: "w",
  });
});
