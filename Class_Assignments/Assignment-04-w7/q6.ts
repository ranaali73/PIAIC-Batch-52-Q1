// Write a program having an array of numbers if the number is negative it should remove the negative number from the array.
function removeNegativeNumbers(numbers: number[]): number[] {
    const updatedNumbers: number[] = [];

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] >= 0) {
            updatedNumbers.push(numbers[i]);
        }
    }

    return updatedNumbers;
}

const numbersArray = [3, -5, 7, -2, 10, -8, 4];

// Function Call
const updatedArray = removeNegativeNumbers(numbersArray);
console.log("Array after removing negative numbers:", updatedArray);
