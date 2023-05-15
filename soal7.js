const array = [1, 4, 7, 9, 12];
const low = 2;
const high = 15;

const result = [];

for (let i = 0; i < array.length; i++) {
  if (array[i] >= low && array[i] <= high) {
    result.push(array[i]);
  }
}

console.log(result.length);
