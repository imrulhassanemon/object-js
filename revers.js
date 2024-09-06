

const sentence = "I am a developer"
let revers = ""
for(let i = 0; i<sentence.length; i++){
    const letter = sentence[i]
    revers = letter + revers
    console.log(revers)
}