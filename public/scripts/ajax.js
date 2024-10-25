import { abiturients } from "./data/abiturients.js";
import { renderSpecialityPage } from "./speciality.js";

export async function sendRequest() {
  await $.ajax({
    url: "../../public/phpScripts/ajax.php",
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

export async function deleteFromDb(id) {
  await $.ajax({
    url: "../../public/phpScripts/delete.php",
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
