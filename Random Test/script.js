const newShape = [20, 14, 2];
const allBig = newShape.every(function (num) {
  return num > 12;
});
console.log(allBig);
