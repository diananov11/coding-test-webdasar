let arr = [8, 3, 9, 2, 5];

function searchNumber(number) {
  for (let i = 0; i < arr.length; i++) {
    if (number === arr[i]) {
      number = arr[i];
    } else if (number !== arr[i]) {
    }
  }
  return number;
}

console.log(searchNumber(3));
