// Exercise 5:  Write a program that determines if a person is eligible to vote based on their age.
function checkEligiblity(age: number) {
    if (age >= 18) {
        console.log(`Yes, Your are eligible for Vote`)
    }
    else {
        console.log(`No, you are not eligible for vote`)
    }

}
// Function Call
checkEligiblity(18)