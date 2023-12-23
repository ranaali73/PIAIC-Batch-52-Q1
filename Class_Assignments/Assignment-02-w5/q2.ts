// Exercise 2: Write a program that takes input and calculates the volume of a cube.

function volumeOfCube(sideLength: number): number {
    let volume: number = sideLength ** 3
    return volume
}

// Function Call
let result: number = volumeOfCube(5)
console.log(`Volume of the cube is: ${result}`)
export { }