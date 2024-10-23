import { Faculty, faculties, getFaculty } from "./data/faculty.js";

let abiturients = [];
async function readFromJSON() {
  const response = await fetch("../scripts/data/j_1.json");
  const data = await response.json();
  abiturients = data;
  return Promise;
}
readFromJSON().then(() => {
  renderSpecialityPage();
});

function renderSpecialityPage() {
  let specialitySummaryHTML = `
    <caption>
      <div class="table-title-flexbox">
        <div class="table-title">Специальность</div>
        <div class="table-title">Абитуриенты</div>
        <div class="table-title">Количество мест</div>
      </div>
    </caption>
  `;
  const facultyId = new URLSearchParams(document.location.search).get(
    "facultyId"
  );

  const matchingFaculty = getFaculty(facultyId);

  matchingFaculty.specialities.forEach((speciality) => {
    specialitySummaryHTML += `
      <div class="main-grid">
        <div class="speciality-class">
          <div>
            <div>
              <img src=${speciality.image} class="speciality-image" />
            </div>
            <div>${speciality.name}</div>
            <div>
              ${speciality.fullname}
            </div>
          </div>
        </div>
        <div class="abiturients-class">
          ${getAbiturients(speciality)}
        </div>
        <div class="places-count-class">${speciality.placesCount}</div>
      </div>
    `;
  });
  document.querySelector(".js-main-class").innerHTML = specialitySummaryHTML;

  document
    .querySelector(".js-main-class")
    .addEventListener("click", (event) => {
      if (event.target.classList.contains("js-delete-abiturient-button")) {
        const { abiturientId } = event.target.dataset;
        const filteredAbiturients = abiturients.filter((abiturient) => {
          return abiturient.id.toString() !== abiturientId;
        });
        abiturients = filteredAbiturients;
        renderSpecialityPage();
      }
    });

  // document
  //   .querySelectorAll(".js-main-class")
  //   .forEach((button) => {
  //     const abiturientId = button.dataset.abiturientId;
  //     button.addEventListener("click", () => {
  //       const filteredAbiturients = abiturients.filter((abiturient) => {
  //         return abiturient.id != abiturientId;
  //       });
  //       abiturients = filteredAbiturients;
  //       renderSpecialityPage();
  //     });
  //   });
}

function getAbiturients(speciality) {
  let html = "";
  let count = 1;
  abiturients.forEach((abiturient) => {
    if (abiturient.specialityName === speciality.name) {
      html += `
        <div class="one-abiturient">
          <div class="abiturients-name">
            ${count}) ${abiturient.firstname} ${abiturient.lastname} ${abiturient.patronymic}
          </div>
          <div class="abiturients-score">${abiturient.pointsNumber}</div>
          <div class=grid-button-class>
            <button class="delete-abiturient-button js-delete-abiturient-button" data-abiturient-id=${abiturient.id}>X</button>
          </div>  
        </div>
      `;
      count++;
    }
  });
  return html;
}
