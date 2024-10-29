const EMAIL_REGEXP =
  /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

document.querySelector(".button-message").addEventListener("click", () => {
  const email = document.getElementById("email").value;
  if (isEmailValid(email)) {
    document.querySelector(
      ".resend-message"
    ).innerHTML = `<a class="resend-again" href="">Отправить код повторно</a>`;
    console.log(email);
    $.ajax({
      url: "../../../public/phpScripts/resetPassword.php",
      data: {
        email: email,
      },
      type: "POST",
      success: (response) => {
        const result = JSON.parse(response);
        alert(result.message);
      },
      error: (xhr, status, error) => {
        console.error("Ошибка:", error);
      },
    });
  } else {
    alert("email isnt valid!");
  }
});

function isEmailValid(value) {
  return EMAIL_REGEXP.test(value);
}
