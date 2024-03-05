let userInput = "test string";
let newString = "test string";
let charToChange = ''


for (let i = 0; i < userInput.length; i++) {
    let currentChar = userInput[i];
    if (currentChar === 'a' || currentChar === 'e' || currentChar === 'i' || currentChar === 'o' || currentChar === 'u') {
        vowelCount = vowelCount + 1;
        console.log(`Знайдена голосна літера! Індекс ${i}, літера ${currentChar}`)
    }
}


console.log(`Кількість голосних літер: ${vowelCount}`);