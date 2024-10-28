function addAdmin() {
  const email = document.getElementById("email").value;
  const login = document.getElementById("login").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;
  if (password !== confirmPassword) return;

  $.ajax({
    url: "../../../public/phpScripts/addAdmin.php",
    data: {
      email: email,
      login: login,
      password: password,
    },
    type: "POST",
    success: (response) => {
      console.log("dsgdsg");
      window.location.href = "index.html";
    },
  });
}
document.querySelector(".js-form-button").addEventListener("click", (event) => {
  const email = document.getElementById("email").value;
  const login = document.getElementById("login").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;
  if (
    !email ||
    !login ||
    !password ||
    !confirmPassword ||
    document
      .querySelector(".password-message")
      .classList.contains("error-message")
  ) {
    event.preventDefault();
    alert("Please fill in all required fields");
  } else {
    event.preventDefault();
    addAdmin();
  }
});

document
  .querySelector(".js-confirm-password-input")
  .addEventListener("input", () => {
    if (
      document.getElementById("confirmPassword").value ===
      document.getElementById("password").value
    ) {
      document
        .querySelector(".password-message")
        .classList.add("password-match");
      document
        .querySelector(".password-message")
        .classList.remove("error-message");
      document.querySelector(".password-message").innerHTML =
        "Passwords match!";
    } else {
      document
        .querySelector(".password-message")
        .classList.add("error-message");
      document
        .querySelector(".password-message")
        .classList.remove("password-match");
      document.querySelector(".password-message").innerHTML =
        "Passwords dont match!";
    }
  });
