export let abiturients = [];

export class Abiturient {
  id;
  firstname;
  lastname;
  patronymic;
  faculty;
  speciality;
  pointsNumber;

  constructor(abiturientExample) {
    this.id = abiturientExample.id;
    this.firstname = abiturientExample.firstname;
    this.lastname = abiturientExample.lastname;
    this.patronymic = abiturientExample.patronymic;
    this.faculty = abiturientExample.faculty;
    this.speciality = abiturientExample.speciality;
    this.pointsNumber = abiturientExample.pointsNumber;
  }
}

export function makeAbiturientsArray() {
  abiturients = abiturients.map((abiturient) => {
    return new Abiturient(abiturient);
  });
  console.log(abiturients);
}

export function getAbiturient(abiturientId) {
  let matchingAbiturient;
  abiturients.forEach((abiturient) => {
    if (abiturient.id === abiturientId) {
      matchingAbiturient = abiturient;
    }
  });
  return matchingAbiturient;
}
