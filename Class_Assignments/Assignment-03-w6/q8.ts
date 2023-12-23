// Write a program that checks if the given year is leap year or not.
function isLeapYear(year: number): boolean {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return true;
    } else {
        return false;
    }
}

// Function Call
const year = 2025;

// function call will return true or false
if (isLeapYear(year)) {
    console.log(`${year} is a leap year`);
} else {
    console.log(`${year} is not a leap year`);
}
