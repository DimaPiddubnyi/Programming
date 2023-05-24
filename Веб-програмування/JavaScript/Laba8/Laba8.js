const priceInput = document.getElementById('priceInput');
const container = document.getElementById('container');

priceInput.addEventListener('focus', () => {
  priceInput.style.outlineColor = 'green';
});

priceInput.addEventListener('blur', () => {
  const price = parseFloat(priceInput.value);
  if (price < 0) {
    priceInput.style.outlineColor = 'red';
    showError('Please enter correct price');
  } else {
    createPriceOutput(price);
  }
});

function createPriceOutput(price) {
  const priceOutput = document.createElement('div');
  priceOutput.className = 'priceOutput';

  const priceText = document.createElement('span');
  priceText.textContent = `Поточна ціна: ${price}`;
  priceOutput.appendChild(priceText);

  const closeBtn = document.createElement('span');
  closeBtn.className = 'closeBtn';
  closeBtn.textContent = 'X';
  closeBtn.addEventListener('click', () => {
    container.removeChild(priceOutput);
    priceInput.value = '';
  });
  priceOutput.appendChild(closeBtn);

  container.appendChild(priceOutput);
}

function showError(errorMessage) {
  const errorElement = document.createElement('div');
  errorElement.className = 'error';
  errorElement.textContent = errorMessage;
  container.appendChild(errorElement);
}