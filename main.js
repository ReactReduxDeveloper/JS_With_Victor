const Massive = [

    {
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 90
    },
    {
        name: "Geta",
        age: 35,
        isMarried: true,
        scores: 56
    },
    {
        name: "David",
        age: 87,
        isMarried: false,
        scores: 20
    },
    {
        name: "Alex",
        age: 45,
        isMarried: true,
        scores: 180
    }
]
const GetNames = (arr, func) => {
    const result = []
    for (let i = 0; i < arr.length; i++) {
        const newValue = func(arr[i])
        result.push(newValue)
    }
    return result
}
console.log(GetNames(Massive, (st) => st.isMarried))

const AddScores = (arr, func) => {
    const result = []
    for (let i = 0; i < arr.length; i++) {
        const newValue = func(arr[i])
        result.push(newValue)
    }
    return result
}
console.log(AddScores(Massive, (st) => ({...st, scores: st.scores + 10})))

const AddPropsIsStudent = (arr, func) => {
    const result = []
    for (let i = 0; i < arr.length; i++) {
        const newValue = func(arr[i])
        result.push(newValue)
    }
    return result
}
console.log(AddPropsIsStudent(Massive, (st) => ({...st, isStudent: true})))

const GetMapped = (arr, func) => {
    const result = []
    for (let i = 0; i < arr.length; i++) {
        const newValue = func(arr[i])
        result.push(newValue)
    }
    return result
}
console.log(Massive.filter(el=>el.scores >= 100))
const Myfilter = (arr, func) => {
    const result = []
    for (let i = 0; i < arr.length; i++) {
        const newValue = func(arr[i])
        if(newValue === true){
        result.push(newValue)
    }
}}


