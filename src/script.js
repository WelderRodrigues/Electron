const number = document.querySelector("#number");
const newPassword = document.querySelector("#newPassword");

function gerarSenha() {
  newPassword.innerHTML = "";

  if (number.value === "") {
    alert("Escolha a quantidade de caracteres que deseja ter em sua senha");
    return;
  }

  let char = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
  let password = "";

  for (i = 0, num = char.length; i < number.value; i++) {
    password += char.charAt(Math.floor(Math.random() * num));
  }

  let result = document.createTextNode(password);
  return newPassword.appendChild(result);
}
