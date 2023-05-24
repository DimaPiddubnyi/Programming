let name = prompt("Введіть ваше ім'я' ?")
let age = prompt("Скільки вам років ?")

if (age < 18) alert("You are not allowed to visit this website")
if (age >= 18 && age <= 22) {
    if (confirm("Are you sure you want to continue")) {
        alert(`Welcome, ${name}`)
    } else {
        alert('You are not allowed to visit this website')
    }
}

if (age > 22) alert(`Welcome, ${name}`)