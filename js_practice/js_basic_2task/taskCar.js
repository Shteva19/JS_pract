function CarPrice(basePrice = 10000, year = 2021, mileage = 70000 , hasClimateControl = true, hasSafetyPackage = true, isElectric =false) {
    

    if (year >= 2019 && year <= 2022) {
        finalPrice *= 1.1; 
        console.log("Автомобіль з 2019 по 2022 рік випуску. До кінцевої ціни додається 10%.");
    }
    if (mileage >= 50000 && mileage <= 100000) {
        finalPrice *= 0.95; 
        console.log("Автомобіль має пробіг від 50 000 км до 100 000 км. Знижено 5% від кінцевої ціни.");
    }



if (hasClimateControl) {
    finalPrice *= 1.07; 
    console.log("В машині є клімат-контроль. Додано 7% до кінцевої ціни.");
}


if (hasSafetyPackage) {
    finalPrice *= 1.08; 
    console.log("В машині є пакет безпеки. Додано 8% до кінцевої ціни.");
}


if (isElectric) {
    finalPrice *= 1.15; 
    console.log("Машина електрична. До кінцевої ціни додається 15%.");
}

console.log(`Базова ціна була ${basePrice}.Остаточна ціна ${finalPrice}.`);
}
