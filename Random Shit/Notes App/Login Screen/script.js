// localStorage.clear();
const login = document.getElementById("login");
const username = document.getElementById("username");
const password = document.getElementById("password");

function loggedIn() {
  const newP = document.createElement("a");
  newP.id = "loginInput";
  newP.innerHTML = "<a class='a' href='../Notes App/index.html'>Notes</a>";
  document.getElementById("appendSpot").appendChild(newP);
}

login.addEventListener("click", function () {
  const usernameToRetrieve = username.value;
  const storedPassword = localStorage.getItem(usernameToRetrieve);
  const passwordValue = password.value;
  console.log(usernameToRetrieve, passwordValue, storedPassword);
  if (storedPassword === passwordValue) {
    alert("You are logged in");
    loggedIn();
  }
  username.value = "";
  password.value = "";
});
