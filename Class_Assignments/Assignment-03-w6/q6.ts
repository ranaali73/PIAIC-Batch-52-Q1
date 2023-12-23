// Write a program that takes temperature and check it.
//  If it is cold then suggest the user to wear warm clothes and so on according to the weather.
function checkWeather(temperature: number) {
    if (temperature <= 30) {
        console.log(`It's cold. Please wear warm clothes.`);
    } else {
        console.log(`It's hot. Please wear normal clothes.`);
    }
}

// Function Call
checkWeather(32);

