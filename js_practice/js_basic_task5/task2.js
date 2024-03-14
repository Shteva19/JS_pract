
    const inputArray = [ 1, 7, 18, 24, 2, 4, 100];
    const squaredArray = inputArray.map(number => number * number);
    console.log (squaredArray)

// or

function myArray(numbers) {
    return numbers.map(number => number * number);
  }
  
  const inputArray2 = [1, 7, 18, 24, 2, 4, 100];
  const squaredArray2 = myArray(inputArray);
  console.log(squaredArray);

