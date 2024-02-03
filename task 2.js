// Задание 2

function checkNumber() {
    let number = +prompt();

  if (number > 1000) {
      alert('Данные неверны');
  } else {
      for (let i = 2; i < number; i++) {
          if (number % i === 0) {
            alert('Cоставное число');
            return;
          }
      }
  }  

  alert('Простое число');
}

checkNumber();