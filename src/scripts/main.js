// Using one single line of JavaScript code, complete the following tasks on the array of integers below.
const integers = [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8];
// Sort the numbers in descending order (10, 9, 8, 7, etc).
function descendingIntegers(a,b) {
    return a-b;
}
integers.sort(descendingIntegers);
console.log(integers);
// Remove any integers greater than 19.
const lessThanNineteen = integers.filter(number => { 
    return (number < 19);
})
console.log(lessThanNineteen)

// Multiply each remaining number by 1.5 and then subtract 1.
const oneAndAHalfMore = lessThanNineteen.map(number => {
    return (number * 1.5)
})
console.log(oneAndAHalfMore)
// Then output (either in the DOM or the console) the sum of all the resulting numbers