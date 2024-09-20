const array = [5, 2, 8, 23, 65, 60, 34, 43, 22, 7, 9, 15, 13, 17, 27, 39];

function findSmallest(ar) {
  let smallest = Math.min(...ar);
  return smallest;
}

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    const sarr = arr.slice(i);
    const one = sarr[0];
    const smallest = findSmallest(sarr); //2
    const indexOfSmallest = sarr.indexOf(smallest); //1
    arr[i] = smallest;
    arr[indexOfSmallest + i] = one;
  }
  return arr;
}

const sortedArray = selectionSort(array);
console.log(sortedArray);
