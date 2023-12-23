// Write a program that checks if the given number is  divisible by 3 or 5 or
// both or not divisible by anyone show output accordingly.

function checkDivisibility(number: number) {
    if (number % 3 === 0 && number % 5 === 0) {
        console.log(`(number % 3 === 0 && number % 5 === 0) => ${(number % 3 === 0 && number % 5 === 0)} ${number} is divisible by both 3 and 5  \n`);
    } else if (number % 3 === 0) {
        console.log(`(number % 3 === 0) ${(number % 3 === 0)} ${number} is divisible by 3  \n`);
    } else if (number % 5 === 0) {
        console.log(`(number % 5 === 0) => ${(number % 5 === 0)} ${number} is divisible by 5 \n`);
    } else {
        console.log(`${number} is not divisible by 3 or 5`);
    }
}

// Function Calls
checkDivisibility(9);
checkDivisibility(10);
checkDivisibility(15);
checkDivisibility(14);


