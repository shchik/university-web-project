export let abiturients = [];

class Abiturient {
  firstname;
  lastname;
  patronymic;
  faculty;
  speciality;
  pointsNumber;

  constructor(abiturientExample) {
    this.firstname = abiturientExample.firstname;
    this.lastname = abiturientExample.lastname;
    this.patronymic = abiturientExample.patronymic;
    this.faculty = abiturientExample.faculty;
    this.speciality = abiturientExample.speciality;
    this.pointsNumber = abiturientExample.pointsNumber;
  }
}

export function makeAbiturientsArray() {
  abiturients.map((abiturient) => {
    return new Abiturient(abiturient);
  });
  console.log(abiturients);
}
