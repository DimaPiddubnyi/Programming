// input fields
const password = document.getElementById("password");
const password_confirm = document.getElementById("password-confirm");

// buttons
const confirm_button = document.getElementById("confirm-btn");

// icons
const show_event = document.getElementById("show-event");
const hide_event = document.getElementById("hide-event");

// global variables
let show_event_boolean = false;
let hide_event_boolean = true;

show_event.addEventListener("click", () => {
  if (show_event_boolean == true) {
    password.type = "password";
    show_event_boolean = false;
    show_event.className = "fas fa-eye icon-password";

    return;
  }

  password.type = "text";
  show_event_boolean = true;
  show_event.className = "fas fa-eye-slash icon-password";
});

hide_event.addEventListener("click", () => {
  if (hide_event_boolean == false) {
    password_confirm.type = "password";
    hide_event_boolean = true;
    hide_event.className = "fas fa-eye-slash icon-password";

    return;
  }

  password_confirm.type = "text";
  hide_event_boolean = false;
  hide_event.className = "fas fa-eye icon-password";
});

confirm_button.addEventListener("click", () => {
    if (password_confirm.value == password.value) {
        alert('You are welcome')
    } else {
        alert("Нужно ввести одинаковые значения")
    }
});