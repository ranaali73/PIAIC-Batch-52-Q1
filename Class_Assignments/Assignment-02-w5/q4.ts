// Exercise 4:   Write a program that checks if a given number is even or odd.

// To determine whether a number is even or odd, it is divided by 2. If the remainder obtained after division is 0, then the number is referred to as an even number. On the other hand, when the remainder is not equal to zero, then the number is called an odd number.


function evenOrOdd(num: number) {
    let checkNumber: boolean = num % 2 == 0
    if (checkNumber) {
        console.log(`Number is even: ${num} (num % 2 == 0) = (${checkNumber})`)
    }
    else {
        console.log(`Number is odd ${num} (num % 2 == 0) = (${checkNumber})`)
    }
}

// Function Call
evenOrOdd(9)