import { Faculty, faculties, getFaculty } from "./data/faculty.js";

let abiturients = [];

export async function sendRequest() {
  await $.ajax({
    url: "../../public/ajax.php",
    dataType: "json",
    type: "GET",
    success: (response) => {
      Object.keys(response).forEach((item) => {
        abiturients.push(response[item]);
      });

      $("#result").text(abiturients.join(", "));
      //sendRequest(response);
      console.log(abiturients);
    },

    error: (xhr, status, error) => {
      console.error("Ошибка:", error);
    },
  });
}

async function deleteFromDb(id) {
  await $.ajax({
    url: "../../public/delete.php",
    //dataType: "json",
    data: { id: id },
    type: "POST",
    success: async (response) => {
      abiturients = [];
      await sendRequest();
      renderSpecialityPage();
    },

    error: (xhr, status, error) => {
      console.error("Ошибка:", error);
    },
  });
  renderSpecialityPage();
}

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

  document
    .querySelectorAll(".js-delete-abiturient-button")
    .forEach((button) => {
      const { abiturientId } = button.dataset;
      button.addEventListener("click", () => {
        deleteFromDb(abiturientId);
      });
    });

  // document
  //   .querySelector(".js-main-class")
  //   .addEventListener("click", (event) => {
  //     if (event.target.classList.contains("js-delete-abiturient-button")) {
  //       const { abiturientId } = event.target.dataset;
  //       deleteFromDb(abiturientId);
  //     }
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

async function go() {
  await sendRequest();
  renderSpecialityPage();
}
go();
