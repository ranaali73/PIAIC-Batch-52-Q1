// Create a function that takes a positive integer as a parameter and uses a for loop to calculate and return the factorial of that number
function calculateFactorial(num: number): number {
    let factorial = 1;

    if (num < 0) {
        console.log("Please provide a positive integer.");
    } else {
        for (let i = 1; i <= num; i++) {
            factorial *= i;
        }
    }

    return factorial;
}

const number = -5;
// function call
const factorialResult = calculateFactorial(number);

if (number < 0) {
    console.log("Factorial calculation not performed for negative numbers.");
} else {
    console.log(`Factorial of ${number} is: ${factorialResult}`);
}
