const array = [4, 2, 6, 88, 3, 11];
let low = array[0];
let high = array[0];
const n = array.length;

for (let i = 0; i < n; i++) {
  if (high < array[i]) {
    high = array[i];
  }

  if (low > array[i]) {
    low = array[i];
  }
}

console.log(`low : ${low}, high : ${high}`);
