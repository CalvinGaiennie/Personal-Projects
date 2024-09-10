// localStorage.clear();
const login = document.getElementById("login");
const username = document.getElementById("username");
const password = document.getElementById("password");

login.addEventListener("click", function () {
  const usernameToRetrieve = username.value;
  const storedPassword = localStorage.getItem(usernameToRetrieve);
  const passwordValue = password.value;
  console.log(usernameToRetrieve, passwordValue, storedPassword);
  if (storedPassword === passwordValue) {
    alert("You are logged in");
  }
  username.value = "";
  password.value = "";
});
