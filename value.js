const person = {
    name: "Imrul Hassan",
    profession: "programmer",
    salary : 100000,
    marrid : true, 
    favPlace : ["san francisco", "los angeles", "new york"]
}
person.salary = 300000;
person["favPlace"] = ["caliafornia", "georgia", "chicago", "michigan", "boston"]
console.log(person)

const keyName = "profession";
console.log(person[keyName])

const mrid = "marrid"
person[mrid] = " ami bia kormu na"
console.log(person)