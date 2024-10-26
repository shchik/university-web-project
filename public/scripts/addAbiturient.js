import { sendRequest } from "./ajax.js";
import { abiturients } from "./data/abiturients.js";

function addAbiturient() {
  const firstname = document.querySelector("#firstname").value;
  const lastname = document.querySelector("#lastname").value;
  const patronymic = document.querySelector("#patronymic").value;
  const faculty = document.querySelector("#faculty").value;
  const speciality = document.querySelector("#speciality").value;
  const pointsNumber = document.querySelector("#pointsNumber").value;

  $.ajax({
    url: "../../public/phpScripts/submit.php",
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
    url: "../../public/phpScripts/edit.php",
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
document.querySelector(".js-edit-button").addEventListener("click", () => {
  const urlParams = new URLSearchParams(window.location.search);
  const abiturientId = urlParams.get("abiturientId");

  editAbiturient(abiturientId);
});
document
  .querySelector(".js-submit-button")
  .addEventListener("click", (event) => {
    event.preventDefault();
    addAbiturient();
  });
