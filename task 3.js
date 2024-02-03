//Задание 3

function createAdd(num1) {
    return function(num2) {
       return num1 + num2;
   };
}

const addTwo = createAdd(2);
console.log(addTwo(8));