// localStorage.clear();
const createAccountButton = document.getElementById("createAccountButton");
const username = document.getElementById("username");
const password = document.getElementById("password");

createAccountButton.addEventListener("click", function () {
  const unObject = { Username: `${username.value}` };
  const pwObject = { Password: `${password.value}` };
  localStorage.setItem(unObject.Username, pwObject.Password);
  username.value = "";
  password.value = "";
});

const view = document.getElementById("view");

view.addEventListener("click", function () {
  const username = localStorage.getItem("CalvinGaiennie");
});
