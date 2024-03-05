let userInput = "test string";
let newString = "";
let vowels = "a,e,i,o,u";

for (let i = 0; i < userInput.length; i++) {
    let currentChar = userInput[i];
    
    if (vowels.includes(currentChar)) {
        newString += "*";
    } else {
        newString += currentChar;
    }
}

console.log("Змінений рядок:", newString);