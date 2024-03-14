function sumArray(numbers){
return numbers.reduce ((acc,curr) => acc + curr,0);



}
const array =[ 20 ,50 ,80 ,20 ,212 ,1];
const sum = sumArray(array);
console.log (sum);