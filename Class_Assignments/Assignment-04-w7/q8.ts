// Implement a program that takes a list of temperatures in Celsius as input from the user. 
// Convert each temperature to Fahrenheit using the formula F = (C * 9/5) + 32 and store the converted temperatures in an array. Use a for loop to perform the conversion for each temperature.

function listOfTemps(tempCelsius: number[]): number[] {
    let fahrenheitArray: number[] = [];

    for (let index = 0; index < tempCelsius.length; index++) {
        const element = tempCelsius[index];
        let F = (element * 9 / 5) + 32;
        fahrenheitArray.push(F);
    }

    return fahrenheitArray;
}

const celsiusTemperatures = [0, 10, 20, 30, 40];
// Function Call
const fahrenheitTemperatures = listOfTemps(celsiusTemperatures);
console.log("Temperatures in Fahrenheit:", fahrenheitTemperatures);
