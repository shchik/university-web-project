import { Faculty, faculties, getFaculty } from "./data/faculty.js";
import { abiturients } from "./data/abiturients.js";

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
}
renderSpecialityPage();

function getAbiturients(speciality) {
  let html = "";
  abiturients.forEach((abiturient) => {
    if (abiturient.specialityName === speciality.name) {
      html += `
        <div class="one-abiturient">
          <div class="abiturients-name">
            ${abiturient.id}) ${abiturient.firstname} ${abiturient.lastname} ${abiturient.patronymic}
          </div>
          <div class="abiturients-score">${abiturient.pointsNumber}</div>
        </div>
      `;
    }
  });
  return html;
}
