const names = ["John", "Fernando", "Alexandra", "Anatolii", "Arina", "Elon"];

const longName = names.find(name => name.length > 6);

if (longName) {
    console.log("Перше ім'я з довжиною більше 6 символів:", longName);
} else {
    console.log("Не знайдено імен з довжиною більше 6 символів.");
}

