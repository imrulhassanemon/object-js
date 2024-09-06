const mobail = {
    brand: "samsung",
    model: 's24 ultra',
    color: "black",
    camera: "200 MP"
}
for(const key in mobail){
    console.log(key)
    console.log(mobail[key])
}

const keys =   Object.keys(mobail)
console.log(keys)

for(let key of keys){
    console.log(key, ":", mobail[key])
    
}

