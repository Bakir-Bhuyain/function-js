/* 
Task-3
Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values. */
function makeAvg(numbers, size) {
  let sum = 0;
  for (let i = 0; i < size; i++) {
    sum += numbers[i];
  }
  if (size > 0) {
    const total = sum / size;
    return total;
  } else {
    return 0;
  }
}
// const myNumbers = [10,20,30,40,50];
// const arraySize = myNumbers.length;
// const average = makeAvg(myNumbers , arraySize);
// console.log("The average is", average)


/**
 *Task-4
Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string. 
 *
 * 
 */

function count_zero(binary_string) {
  let count = 0;
  for (let i = 0; i < binary_string.length; i++) {
    const element = binary_string[i];
    if (element === "0") {
      count++;
    }
  }
  return count;
}
// const binaryDigit = "0111010001010";
// const totalZero = count_zero(binaryDigit);
// console.log(totalZero);


/* Task-5
Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. If even return Even. If odd return Odd */

function odd_even(number){
      if(number %2 ===0){
            return "even"
      }return "odd"
}
const even_odd = odd_even(22);
console.log(even_odd)
