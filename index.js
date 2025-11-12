const generateBtnEl = document.getElementById("generate-btn");
const passwordOneEl = document.getElementById("password-one");
const passwordTwoEl = document.getElementById("password-two");

const characters = [
  ..."ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  ..."abcdefghijklmnopqrstuvwxyz",
  ..."0123456789",
  ..."~`!@#$%^&*()_-+={[}],|:;<>.?/",
];

let password = "";

function newPassword() {
  password = "";

  for (let i = 0; i < 15; i++) {
    let randomChar = Math.floor(Math.random() * characters.length);

    password += characters[randomChar];
  }

  return password;
}

generateBtnEl.addEventListener("click", function () {
  passwordOneEl.textContent = newPassword();
  passwordTwoEl.textContent = newPassword();
});
