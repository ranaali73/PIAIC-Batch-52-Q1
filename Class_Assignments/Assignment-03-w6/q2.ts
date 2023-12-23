// Write a program that calculates the percentage.
function getPercentage(amount: number, percentage: number): void {
    let perNum = (amount * percentage) / 100
    console.log(`Percentage ${percentage} of ${amount} is ${perNum}`)
}
getPercentage(100, 50)
