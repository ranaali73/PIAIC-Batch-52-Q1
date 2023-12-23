// Write a program that converts given number of days in to weeks and days such as 17 days = 2 weeks and 3 days.
function numberOfDays(days: number) {
    let week: number = days / 7
    let day: number = days % 7
    console.log(`From ${days} days, its ${week.toFixed(0)} Weeks: and ${day.toFixed(0)}: Days`)
}

numberOfDays(23)