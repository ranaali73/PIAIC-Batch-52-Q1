// Write a program to convert the temperature from Celsius to Fahrenheit and vice verse.
function celsiustoFahrenheit(celsius: number): number {
    let fahrenheit: number = (1.8 * celsius) + 32
    return fahrenheit
}

function fahrenheitToCelsius(fahrenheit: number): number {
    let celsius: number = (fahrenheit - 32) * 5 / 9
    return celsius
}

// Function Call
let celsiustoFahrenheitResult = celsiustoFahrenheit(10)
console.log(`Celsius to Fahrenheit: ${celsiustoFahrenheitResult}`)
let fahrenheitToCelsiusResult = fahrenheitToCelsius(95)
console.log(`Fahrenheit to Celsius : ${fahrenheitToCelsiusResult}`)
