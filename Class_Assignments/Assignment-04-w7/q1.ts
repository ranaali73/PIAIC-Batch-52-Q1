//Create a function that takes an array, an index, and a value as parameters. Inside the function, use the splice method to insert the value at the specified index in the array. Return the modified array.
function useOfArray(nums: string[], index: number, value: string): string[] {
    nums.splice(index, 0, value)
    return nums
}

const fruits = ['apple', 'banana', 'cherry'];
console.log(`Original Array: ${fruits}`)
// Function Call
let outputResult: string[] = useOfArray(fruits, 2, 'Graps')
console.log(`Array after modification: ${outputResult}`)



