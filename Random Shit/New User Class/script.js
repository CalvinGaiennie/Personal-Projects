const User = function (firstName, lastName, middleInitial) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.middleInitial = middleInitial;
  this.initials = this.createInitials();
};

function getInitial(string) {
  let initial = string[0];
  initial = initial.toUpperCase();
  return initial;
}

User.prototype.createInitials = function () {
  const firstInitial = getInitial(this.firstName);
  const middleInitial = getInitial(this.middleInitial);
  const lastInitial = getInitial(this.lastName);
  const initials = firstInitial + middleInitial + lastInitial;
  return initials;
};

const jonas = new User("Jonas", "Schmedtman", "R");
console.log(jonas.initials);
