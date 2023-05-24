function createNewUser() {
  var firstName = prompt('Введіть імя:');
  var lastName = prompt('Введіть призвище:');

  var newUser = {
    firstName: firstName,
    lastName: lastName,
    getLogin: function() {
      var firstLetter = this.firstName.charAt(0).toLowerCase();
      return firstLetter + this.lastName.toLowerCase();
    }
  };

  return newUser;
}

var user = createNewUser();
var login = user.getLogin();
console.log('Логін користувача:', login);