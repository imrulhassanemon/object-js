const undergraduation = {
    name: "university of caifornia brakely",
    degree: "MAC in computer science",
    events: ["programming", "data science", "algorithum"],
    unique: {
        best: "top best university in the world",
        result:{
            "c-gpa": 4,
            merit: "top"
        }
    }
}
undergraduation.unique.result.merit = "top top top noutch"
console.log(undergraduation.unique.result["c-gpa"])
console.log(undergraduation.unique.result.merit)
console.log(undergraduation)
const value =  undergraduation.events[1] = "social science"
console.log(value)
delete undergraduation.unique.best
console.log(undergraduation)
