function calculate(num1, num2, operator) {

    if (arguments.length !== 3) {
      throw new Error('Потрібно передати три аргументи');
    }
  
   
    if (typeof num1 !== 'number' || typeof num2 !== 'number' || isNaN(num1) || isNaN(num2)) {
      throw new Error('Перші два параметри повинні бути числами');
    }
  
  
    if (typeof operator !== 'string' || !['+', '-', '/', '*'].includes(operator)) {
      throw new Error('Третій параметр повинен бути +, -, / або *');
    }
  
   
    if (operator === '/' && num2 === 0) {
      throw new Error('Коли операція ділення, другий параметр не може бути 0');
    }
  
    let result;
  
    
    if (operator === '+') {
      result = num1 + num2;
    } else if (operator === '-') {
      result = num1 - num2;
    } else if (operator === '/') {
      result = num1 / num2;
    } else if (operator === '*') {
      result = num1 * num2;
    }
  
    return `${num1} ${operator} ${num2} = ${result}`;
  }
  
  
  try {
    console.log(calculate(100, 5, "*")); 
    console.log(calculate(100, 5, "string")); 
    console.log(calculate(10, 0, "/")); 
  } catch (error) {
    console.log('Вивід:');
    console.log(error.message);
  }