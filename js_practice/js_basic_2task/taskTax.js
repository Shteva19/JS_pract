let income = 125000;
 

let tax ;


if (income < 10000){
tax = 5
    

} else if (income <= 50000){
    tax = 10
   

} else if (income <= 100000){
tax =15


} else if (income <= 200000){
    tax =20
    

} else {
    tax = 25 
}


let sumIncome = (tax /100) * income;
let netEarnings = income - sumIncome;

console.log("Базовий дохід: " + income);
console.log("Відсоток податку: " + tax + "%");
console.log("Дохід після вирахування податків: " + netEarnings);

