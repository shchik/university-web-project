import { sendRequest } from "./speciality.js";
import { abiturients } from "./data/abiturients.js";

function addAbiturient() {
  const firstname = document.querySelector("#firstname").value;
  const lastname = document.querySelector("#lastname").value;
  const patronymic = document.querySelector("#patronymic").value;
  const faculty = document.querySelector("#faculty").value;
  const speciality = document.querySelector("#speciality").value;
  const pointsNumber = document.querySelector("#pointsNumber").value;

  $.ajax({
    url: "../../public/submit.php",
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

document
  .querySelector(".js-submit-button")
  .addEventListener("click", (event) => {
    event.preventDefault();
    addAbiturient();
  });
