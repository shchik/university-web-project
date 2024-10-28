function addAdmin() {
  const email = document.getElementById("email").value;
  const login = document.getElementById("login").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

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
  event.preventDefault();
  if (
    !email ||
    !login ||
    !password ||
    !confirmPassword ||
    document
      .querySelector(".password-message")
      .classList.contains("error-message")
  ) {
    alert("Please fill in all required fields");
  } else if (email.length < 4 || login.length < 4 || password.length < 4) {
    alert("Please fill more letters in required fields");
  } else if (!isEmailValid(document.querySelector(".js-email-class").value)) {
    alert("Please fill right email");
  } else {
    addAdmin();
  }
});

const EMAIL_REGEXP =
  /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

document.querySelector(".js-email-class").addEventListener("input", () => {
  const email = document.getElementById("email").value;
  if (isEmailValid(email)) {
    document.querySelector(".js-email-class").style.borderColor = "green";
  } else {
    document.querySelector(".js-email-class").style.borderColor = "red";
  }
});

function isEmailValid(value) {
  return EMAIL_REGEXP.test(value);
}

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
