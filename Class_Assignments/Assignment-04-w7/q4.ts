// Write a program that uses a for loop to print the first 10 even numbers.
let count = 0
function evenNumbers(len: number) {
    console.log('Even numbers:')
    for (let i = 2; i <= 20; i += 2) {
        count += 1
        console.log(`${count}: ${i}`);
    }
}

// Function Call
evenNumbers(20);
