import { abiturients } from "../data/abiturients.js";
import { renderSpecialityPage } from "../speciality.js";

export async function sendRequest() {
  await $.ajax({
    url: "../../../public/phpScripts/ajax.php",
    dataType: "json",
    type: "GET",
    success: (response) => {
      Object.keys(response).forEach((item) => {
        abiturients.push(response[item]);
      });
      abiturients.sort((a, b) => (a.pointsNumber < b.pointsNumber ? 1 : -1));

      $("#result").text(abiturients.join(", "));
    },

    error: (xhr, status, error) => {
      console.error("Ошибка:", error);
    },
  });
}

export async function deleteFromDb(id) {
  await $.ajax({
    url: "../../../public/phpScripts/delete.php",
    //dataType: "json",
    data: { id: id },
    type: "POST",
    success: async (response) => {
      abiturients.splice(0, abiturients.length);
      //abiturients = [];
      await sendRequest();
      renderSpecialityPage();
    },

    error: (xhr, status, error) => {
      console.error("Ошибка:", error);
    },
  });
  renderSpecialityPage();
}

export function addAbiturient() {
  const firstname = document.querySelector("#firstname").value;
  const lastname = document.querySelector("#lastname").value;
  const patronymic = document.querySelector("#patronymic").value;
  const faculty = document.querySelector("#faculty").value;
  const speciality = document.querySelector("#speciality").value;
  const pointsNumber = document.querySelector("#pointsNumber").value;

  $.ajax({
    url: "../../../public/phpScripts/submit.php",
    data: {
      firstname: firstname,
      lastname: lastname,
      patronymic: patronymic,
      faculty: faculty,
      speciality: speciality,
      pointsNumber: pointsNumber,
    },
    type: "POST",
    success: (response) => {
      sendRequest();
      window.location.href = "index.html";
    },
  });
}

export function editAbiturient(abiturientId) {
  const id = abiturientId;
  const firstname = document.querySelector("#firstname").value;
  const lastname = document.querySelector("#lastname").value;
  const patronymic = document.querySelector("#patronymic").value;
  const faculty = document.querySelector("#faculty").value;
  const speciality = document.querySelector("#speciality").value;
  const pointsNumber = document.querySelector("#pointsNumber").value;

  $.ajax({
    url: "../../../public/phpScripts/edit.php",
    data: {
      id: id,
      firstname: firstname,
      lastname: lastname,
      patronymic: patronymic,
      faculty: faculty,
      speciality: speciality,
      pointsNumber: pointsNumber,
    },
    type: "POST",
    success: (response) => {
      sendRequest();
      window.location.href = "index.html";
    },
  });
}
