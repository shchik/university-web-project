function enterAccount() {
  const login = document.getElementById("login").value;
  const password = document.getElementById("password").value;

  $.ajax({
    url: "../../../public/phpScripts/enterAccount.php",
    data: {
      login: login,
      password: password,
    },
    type: "POST",
    success: (response) => {
      if (response.status === "success") {
        window.location.href = "index.html";
      } else {
        document
          .querySelector(".login-message")
          .classList.add("error-login-message");
        document.querySelector(".login-message").innerHTML =
          "Неверный логин или пароль!";
      }
    },
    error: (xhr, status, error) => {
      console.error("Ошибка:", error);
    },
  });
}
document.querySelector(".js-form-button").addEventListener("click", (event) => {
  event.preventDefault();
  enterAccount();
});
