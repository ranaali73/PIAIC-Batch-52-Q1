// Exercise 3:  Write a program that checks if a given number is positive, negative, or zero.
function checkNumber(num: number) {
    if (num < 0) {
        console.log(`Number is Negative ${num}`)
    }
    else if (num > 0) {
        console.log(`Number is Positive ${num}`)
    }
    else {
        console.log(`Number is 0 ${num}`)
    }
}

// Function Call
checkNumber(0);