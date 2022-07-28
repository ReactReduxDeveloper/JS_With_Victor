const names = ["Bob", "Alex", "Dima"]
const numbers = [1, 2, 39, 34, 357]
console.log(names.sort())
const compareFn = (a, b) => a + b
console.log(numbers.sort(compareFn).reverse())
const students = [
    {
        name: "Bob",
        age: 20,
        isMarride: true,
        scores: 89
    },
    {
        name: "Alex",
        age: 25,
        isMarride: false,
        scores: 300
    },
    {
        name: "Gera",
        age: 54,
        isMarride: true,
        scores: 34
    },
    {
        name: "Drug",
        age: 50,
        isMarride: true,
        scores: 65
    },
];
console.log(students.sort((a, b) => a.scores - b.scores).reverse())
console.log(students.sort((a, b) => a.name.localeCompare(b.name)))
console.log(students.sort((a, b) => a.name.toUpperCase() > b.name.toUpperCase() ? 1 : -1))

const nums = [54, 11, 36, 67, 89, 27]

for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] > nums[i + 1]){
        const temp = nums[i]
        nums[i] = nums[i + 1]
        nums[i + 1] = temp
    }
        }