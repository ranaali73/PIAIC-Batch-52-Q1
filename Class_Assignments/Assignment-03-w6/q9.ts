// Develop a program that determines the day of the week. Ask the user for a number (1-7) and use nested if statements to print the corresponding day's name.

function checkDayOfWeek(number: number): string {
    let day: string = '';
    if (number === 1) {
        day = 'Sunday';
    }
    else if (number === 2) {
        day = 'Monday';
    }
    else if (number === 3) {
        day = 'Tuesday';
    }
    else if (number === 4) {
        day = 'Wednesday';
    }
    else if (number === 5) {
        day = 'Thursday';
    }
    else if (number === 6) {
        day = 'Friday';
    }
    else if (number === 7) {
        day = 'Saturday';
    }
    else {
        day = 'Invalid input';
    }
    return day;
}


const userInput = 10;

const dayOfWeek = checkDayOfWeek(userInput);
console.log(`The day corresponding to number ${userInput} is ${dayOfWeek}`);
