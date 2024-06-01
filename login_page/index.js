const username = document.getElementById("username");
const password = document.getElementById("password");

function login() {
  if (username.value == "admin" && password.value == "12345") {
    alert("Souvik Makur Login!");
  }
  else {
    alert("Wrong input!");
  }
}
