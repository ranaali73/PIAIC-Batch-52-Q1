
// Exercise 6:  Write a program that calculates the result of a mathematical expression.	((10 + 5) * 3 - 2) / (4 % 3)  - 7)
function cal(n1: number, n2: number, n3: number, n4: number, n5: number, n6: number, n7: number,): number {
    let result: number = ((n1 + n2) * n3 - n4) / (n5 % n6) - n7;
    return result


}

// Function Call
let show = cal(10, 5, 3, 2, 4, 3, 7)
console.log(show)