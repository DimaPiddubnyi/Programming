let a = parseFloat(prompt('Введіть число a'));
let b = parseFloat(prompt('Введіть число b'));

let operation = prompt('Введіть обрану математичну операцію (+, -, *, /)');

function calculate(a, b, operation) {
  let result;

  switch (operation) {
    case '+':
      result = a + b;
      break;
    case '-':
      result = a - b;
      break;
    case '*':
      result = a * b;
      break;
    case '/':
      result = a / b;
      break;
    default:
      console.log('Данна операція не наведена в калькуляторі');
      return;
  }

  console.log('Результат:', result);
}

calculate(a, b, operation);