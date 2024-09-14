const day1 = document.getElementById("1");
const day2 = document.getElementById("2");
const day3 = document.getElementById("3");
const day4 = document.getElementById("4");
const day5 = document.getElementById("5");
const day6 = document.getElementById("6");
const day7 = document.getElementById("7");
const date1 = document.getElementById("date1");
const date2 = document.getElementById("date2");
const date3 = document.getElementById("date3");
const date4 = document.getElementById("date4");
const date5 = document.getElementById("date5");
const date6 = document.getElementById("date6");
const date7 = document.getElementById("date7");
const choose = document.getElementById("choose");
const plansSelected = document.getElementById("plansSelect");
const daySelected = document.getElementById("daySelect");
const timeSelected = document.getElementById("timeSelect");
////
const modal = document.getElementById("myModal");
const openModalBtn = document.getElementById("openModalBtn");
const closeModalBtn = document.getElementsByClassName("close")[0];

const timeInDay = 86400000;
const now = new Date();
const nowS = now.getTime();
const login = document.getElementById("login");
const username = document.getElementById("username");
const password = document.getElementById("password");
let currentUser = "CRG";
let divId = 1;
const times = [
  "12AM",
  "1AM",
  "2AM",
  "3AM",
  "4AM",
  "5AM",
  "6AM",
  "7AM",
  "8AM",
  "9AM",
  "10AM",
  "11AM",
  "12PM",
  "1PM",
  "2PM",
  "3PM",
  "4PM",
  "5PM",
  "6PM",
  "7PM",
  "8PM",
  "9PM",
  "10PM",
  "11PM",
];
let dayNames = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

function day(days) {
  const total = timeInDay * days;
  return total;
}
function formatDate(date) {
  let dayNumber = date.getDay();
  let dayName = dayNames[dayNumber];
  let dayOfMonth = date.getDate();
  let suffix = "th";
  if (dayOfMonth == 1 || dayOfMonth == 21 || dayOfMonth == 31) {
    suffix = "st";
  } else if (dayOfMonth == 2 || dayOfMonth == 22) {
    suffix = "nd";
  } else if (dayOfMonth == 3 || dayOfMonth == 23) {
    suffix = "rd";
  }
  let newDate = `${dayName} the  ${dayOfMonth}${suffix}`;
  return newDate;
}
function ok() {
  date1.innerHTML = formatDate(new Date(nowS));
  date2.innerHTML = formatDate(new Date(nowS + day(1)));
  date3.innerHTML = formatDate(new Date(nowS + day(2)));
  date4.innerHTML = formatDate(new Date(nowS + day(3)));
  date5.innerHTML = formatDate(new Date(nowS + day(4)));
  date6.innerHTML = formatDate(new Date(nowS + day(5)));
  date7.innerHTML = formatDate(new Date(nowS + day(6)));
}

function createElement(element, content) {
  element = document.createElement(element);
  if (arguments.length > 1) {
    element.innerHTML = content;
  }
  return element;
}

function setUpCalendar() {
  for (let i = 0; i < 7; i++) {
    for (let i = 0; i < 24; i++) {
      let time = createElement("p", `${times[i]}`);
      time.classList.add("time");
      time.id = `${i + 1},${divId}`;
      const div = document.getElementById(`${divId}`);
      div.appendChild(time);
    }
    divId = divId + 1;
  }
}

choose.addEventListener("click", function () {
  console.log(currentUser);
  const plansSelectedV = plansSelected.value;
  const daySelectedV = daySelected.value;
  const timeSelectedV = timeSelected.value;
  const slotID = `${timeSelectedV},${daySelectedV}`;
  const selectedSlot = document.getElementById(`${slotID}`);
  const currentText = selectedSlot.innerHTML;
  console.log(`${currentText} ${currentUser}`);
  selectedSlot.innerHTML = `${currentText} <strong><span class=${plansSelectedV}>${currentUser}</span></strong>`;
});

//////////////////////////////////////////////////////////////

//Login

////////////////////////////////////////////////////////////

// Open the modal when the button is clicked
openModalBtn.onclick = function () {
  modal.style.display = "block";
};

// Close the modal when the close button (x) is clicked
closeModalBtn.onclick = function () {
  modal.style.display = "none";
};

// Close the modal if the user clicks outside the modal content
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

login.addEventListener("click", function () {
  const usernameToRetrieve = username.value;
  const storedPassword = localStorage.getItem(usernameToRetrieve);
  const passwordValue = password.value;
  if (storedPassword === passwordValue) {
    currentUser = localStorage.getItem(`${username.value}Reference`);
  }
  username.value = "";
  password.value = "";
});

ok();
setUpCalendar();

////////////////////////////////////////////////////////////////////////
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

// const User = function (firstName, lastName, middleInitial) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.middleInitial = middleInitial;
//   this.initials = this.createInitials();
// };

// function getInitial(string) {
//   let initial = string[0];
//   initial = initial.toUpperCase();
//   return initial;
// }

// User.prototype.createInitials = function () {
//   const firstInitial = getInitial(this.firstName);
//   const middleInitial = getInitial(this.middleInitial);
//   const lastInitial = getInitial(this.lastName);
//   const initials = firstInitial + middleInitial + lastInitial;
//   return initials;
// };

// const Calvin = new User("Calvin", "R", "Gaiennie", "R");
// const Mr = new User("Mr.", "Herbert", "Garrison", "Herbert");
