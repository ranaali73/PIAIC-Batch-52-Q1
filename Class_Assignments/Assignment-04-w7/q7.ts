// Create a function that takes an array of numbers as parameter. Use a for loop to calculate and return the sum of all the numbers in the array.
function calculateSum(numbers: number[]): number {
    let sum = 0;

    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }

    return sum;
}

// Example usage
const numbersArrayResult = [3, 7, 12, 5, 9];
const totalSum = calculateSum(numbersArrayResult);
console.log("The sum of numbers in the array is:", totalSum);
