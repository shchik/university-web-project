import { sendRequest } from "./speciality";

function addAbiturient() {
  $.ajax({
    url: "../../public/submit.php",
    //data:  ,
    type: "POST",
    success: (response) => {
      sendRequest();
    },
  });
}

document.querySelector(".js-submit-button").addEventListener("click", () => {
  addAbiturient();
});
