//Задание 5

//1 способ
const degreeNumber = (x, n) => x ** n;

console.log(degreeNumber(2, 5));

//2 способ
const degreeNumber = (x, n) => {
    let result = 1;

  for(let i = 0; i < n; i++) {
      result *= x;
  }

return result;
}

console.log(degreeNumber(2, 5));
