function createNewUser() {
  var firstName = prompt('Введіть імя:');
  var lastName = prompt('Введіть призвище:');
  var birthday = prompt('Введіть дату народження у форматі dd.mm.yyyy:');

    var newUser = {
      firstName: firstName,
      lastName: lastName,
      birthday: birthday,
    getAge: function() {
      var today = new Date();
      var birthDate = new Date(this.birthday);

      var age = today.getFullYear() - birthDate.getFullYear();
      var monthDiff = today.getMonth() - birthDate.getMonth();
      if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }

      return age;
    },
      getPassword: function() {
        var firstLetter = this.firstName.charAt(0).toUpperCase();
        var lastNameLower = this.lastName.toLowerCase();
        var birthYear = this.birthday.slice(6);

      return firstLetter + lastNameLower + birthYear;
    }
  };

  return newUser;
}

var user = createNewUser();
var age = user.getAge();
var password = user.getPassword();

console.log('Імя користувача:', user.firstName);
console.log('Прізвище користувача:', user.lastName);
console.log('Дата народження:', user.birthday);
console.log('Вік:', age);
console.log('Пароль:', password);