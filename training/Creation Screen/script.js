// localStorage.clear();
const createAccountButton = document.getElementById("createAccountButton");
const username = document.getElementById("username");
const password = document.getElementById("password");
const firstName = document.getElementById("firstName");
const middleName = document.getElementById("middleInitial");
const lastName = document.getElementById("lastName");

function getInitial(string) {
  let initial = string[0];
  initial = initial.toUpperCase();
  return initial;
}

function createInitials() {
  const firstInitial = getInitial(firstName.value);
  const middleInitial = getInitial(middleName.value);
  const lastInitial = getInitial(lastName.value);
  const initials = firstInitial + middleInitial + lastInitial;
  return initials;
}

createAccountButton.addEventListener("click", function () {
  const unObject = { Username: `${username.value}` };
  const pwObject = { Password: `${password.value}` };
  localStorage.setItem(unObject.Username, pwObject.Password);
  localStorage.setItem(`${username.value}Reference`, createInitials());
  console.log(`${username.value}Reference`, createInitials());
  //set the username + initials with the initials
  username.value = "";
  password.value = "";
  firstName.value = "";
  middleInitial.value = "";
  lastName.value = "";
});
