const id_1 = "45gh-56yu"
const id_2 = "55gh-58yu"
const todolists = [

    {
        id: id_1,
        title: "What to learn",
        filter: "all",
        tasks: [
            {id: 12, title: "JS", isDone: false},
            {id: 13, title: "TS", isDone: false},
            {id: 14, title: "HTML", isDone: true},
        ]
    },
    {
        id: id_2,
        title: "What to buy",
        filter: "all",
        tasks: [
            {id: 22, title: "BEER", isDone: false},
            {id: 23, title: "Meat", isDone: false},
            {id: 24, title: "Fish", isDone: false},
        ]
    }
]
const tasks = {
    [id_1]: [
        {id: 12, title: "JS", isDone: false},
        {id: 13, title: "TS", isDone: false},
        {id: 14, title: "HTML", isDone: true},
    ],
    [id_2]: [
        {id: 22, title: "BEER", isDone: false},
        {id: 23, title: "Meat", isDone: false},
        {id: 24, title: "Fish", isDone: false},
    ]
}
console.log(tasks[id_1].find(t => t.id === 12).title)
console.log(...tasks[id_2], {id: 25, title: "MILK", isDone: false})
console.log(tasks[id_1].map(t => t.title))
const nums = [50, 40, 30]
console.log(nums.reduce((arr, el) => arr * el, 2))
console.log(nums.reduce((arr, el) => arr > el ? el : arr))