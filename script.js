function sumOfSquares(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i] * arr[i];
    }
    return sum;
  }
  
  const numbers = [1, 2, 3, 4, 5,6, 7, 8 ,9, 10];
  const result = sumOfSquares(numbers);
  console.log("ответ", result);
  