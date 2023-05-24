let numb = prompt("Введіть число");

if (numb >= 5) {
  for (let i = 0; i <= numb; i++) {
    if (i % 5 === 0) {
      console.log(i);
    }
  }
} else {
    console.log('Sorry, no numbers')
}