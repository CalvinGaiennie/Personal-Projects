// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const array = ["7", "1", "3", "8", "9", "6", "4", "5", "2"];
//              0    1    2    3    4    5    6    7    8
const array1 = [...array];
console.log(array1);
function shuffle() {
  for (i = 0; i < 5; i++) {
    randomIndex = 4; // random index //4
    randomIndex2 = 2; // random index //2
    string1 = String(array[randomIndex]); // '9'
    string2 = String(array[randomIndex2]); // '3'
    array.splice(randomIndex, 1, string2);
    array.splice(randomIndex2, 1, string1);
  }
}
shuffle();
console.log(array);
