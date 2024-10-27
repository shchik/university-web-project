function addAdmin() {
  const email = document.getElementById("email").value;
  const login = document.getElementById("login").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;
  console.log("sddgs");
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
  event.preventDefault();
  addAdmin();
});
