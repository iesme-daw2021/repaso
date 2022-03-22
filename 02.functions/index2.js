const form = document.forms[0];
form.addEventListener('submit', createUserHandler);

function getUserElement(form) {
  const usernameInput = form.children[0].lastElementChild;
  return usernameInput;
}

function getUserInput(usernameInput) {
  const usernameValue = usernameInput.value.trim();
  return usernameValue;
}

function getPasswordElement(form) {
  const passwordInput = form.children[0].nextElementSibling.lastElementChild;
  return passwordInput;
}

function getPasswordInput(passwordInput) {
  const passwordValue = passwordInput.value;
  return passwordValue;
}

function validateUserInput(value) {
  if (value === '') {
    return false;
  } else {
    return true;
  }
}

function validatePasswordInput(value) {
  if (value.length < 8) {
    return false;
  } else {
    return true;
  }
}

function createUserObject(usernameValue, passwordValue) {
  const user = {
    username: usernameValue,
    password: passwordValue,
  };

  return user;
}
/*
createUserObject
showUserObject
*/

function createUserHandler(ev) {
  ev.preventDefault();

  const userElement = getUserElement(form);
  const usernameValue = getUserInput(userElement);

  const passwordElement = getPasswordElement(form);
  const passwordValue = getPasswordInput(passwordElement);

  const isValidUserInput = validateUserInput(usernameValue);
  if (!isValidUserInput) {
    userElement.focus();
    alert('El campo usuario no puede estar vacío');
    return;
  }

  const isValidPasswordInput = validatePasswordInput(passwordValue);
  if (!isValidPasswordInput) {
    passwordElement.focus();
    alert('El password debe tener al menos 8 caracteres');
    return;
  }

  const user = createUserObject(usernameValue, passwordValue);

  console.log(user);
}
