import { faculties, Faculty } from "./data/faculty.js";

function renderIndexPage() {
  let htmlIndexSummary = "";

  faculties.forEach((faculty) => {
    htmlIndexSummary += `
      <div class="one-container">
        <div class="faculty-image">
          <a
            href="https://htmlbook.ru/content/izobrazhenie-v-kachestve-ssylki"
            target="_blank"
          >
            <img src=${faculty.getImage()} class="fitr-image" />
          </a>
        </div>
        <div class="faculty-name">${faculty.getName()}</div>
        <div class="faculty-full-name">
          ${faculty.getFullname()}
        </div>
        <div class="adress">
          ${faculty.getAddress()}
        </div>
        <div class="main-grid-button">
          <button class="go-to-link-button js-go-to-link-button" data-faculty-id=${faculty.getId()}>Перейти -></button>
        </div>
        
      </div>
    `;
  });
  document.querySelector(".js-main-grid").innerHTML = htmlIndexSummary;

  document.querySelectorAll(".js-go-to-link-button").forEach((button) => {
    button.addEventListener("click", () => {
      const { facultyId } = button.dataset;
      window.location.href = `speciality.html?facultyId=${facultyId}`;
    });
  });
}

renderIndexPage();
