import { addAbiturient, editAbiturient } from "./ajax/ajax.js";

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
