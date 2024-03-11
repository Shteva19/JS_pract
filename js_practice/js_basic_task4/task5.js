const numbers = [150, 23, 1, -53, 49];

const allLessThan50 = numbers.every(number => number < 50);

if (allLessThan50) {
    console.log("Всі елементи масиву менше 50.");
} else {
    console.log("Не всі елементи масиву менше 50.");
}
