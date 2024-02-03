// Задание 4

function printNumbers(num1, num2) {
    let current = num1;
  
    let timerId = setInterval(function() {
      console.log(current);
      
      if (current === num2) {
        clearInterval(timerId);
      }
      
      current++;
    }, 1000);
  }
  
  printNumbers(5, 15);