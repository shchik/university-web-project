import { getFaculty } from "./data/faculty.js";
import { abiturients, makeAbiturientsArray } from "./data/abiturients.js";
import { sendRequest, deleteFromDb } from "./ajax/ajax.js";

export function renderSpecialityPage() {
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
  // document
  //   .querySelector(".js-logout-link")
  //   .addEventListener("click", (event) => {
  //     event.preventDefault();
  //     history.pushState(null, null, location.href);
  //     event.target.closest("a").href;
  //     window.onpopstate = function (event) {
  //       history.go(1);
  //     };
  //   });
  makeAbiturientsArray();
  deleteButton();
  editButton();
}

function deleteButton() {
  document
    .querySelectorAll(".js-delete-abiturient-button")
    .forEach((button) => {
      const { abiturientId } = button.dataset;
      button.addEventListener("click", () => {
        deleteFromDb(abiturientId);
      });
    });
}

function editButton() {
  document.querySelectorAll(".js-edit-abiturient-button").forEach((button) => {
    const { abiturientId } = button.dataset;
    button.addEventListener("click", () => {
      window.location.href = `addAbiturient.html?abiturientId=${abiturientId}`;
    });
  });
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
          <div class="grid-button-class">
            <button
              class="edit-abiturient-button js-edit-abiturient-button"
              data-abiturient-id="${abiturient.id}"
              title="edit"
            >
              <img src="images/icons/edit.png" class="edit-image" />
            </button>
          </div>  
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

async function go() {
  await sendRequest();
  renderSpecialityPage();
}
go();
