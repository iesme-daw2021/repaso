const form = document.forms[0];
form.addEventListener('submit', createUserHandler);

function createUserHandler(ev) {
  ev.preventDefault();
  const usernameInput = form.children[0].lastElementChild;
  const passwordInput = form.children[0].nextElementSibling.lastElementChild;

  const usernameValue = usernameInput.value.trim();
  const passwordValue = passwordInput.value;

  if (usernameValue === '') {
    usernameInput.focus();
    alert('El campo usuario no puede estar vacío');
    return;
  }

  if (passwordValue.length < 8) {
    passwordInput.focus();
    alert('El password debe tener al menos 8 caracteres');
    return;
  }

  const user = {
    username: usernameValue,
    password: passwordValue,
  };

  console.log(user);
}
