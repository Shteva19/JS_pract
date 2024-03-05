function displayEvenNumbersBetween(number1, number2) {
    let start = Math.min(number1, number2);
    let end = Math.max(number1, number2);

    console.log(`Парні числа між ${start} і ${end}:`);
    for (let i = start; i <= end; i++) {
        if (i % 2 === 0) {
            console.log(i);
        }
    }
}