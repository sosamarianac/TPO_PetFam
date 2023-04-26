const form = document.querySelector('form');

form.addEventListener('submit', function(event) {
  // previene que la página se recargue cuando se envía el formulario
  event.preventDefault();

  // obtiene los valores de los campos del formulario
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  //const password = document.getElementById('password').value;

  // verifica que los campos requeridos estén completos
  if (name === '' || email === '') {
    alert('Por favor, complete todos los campos.');
    return;
  }

  // verifica que el correo electrónico sea válido
  const emailRegex = /^\S+@\S+\.\S+$/;
  if (!emailRegex.test(email)) {
    alert('Por favor, ingrese un correo electrónico válido.');
    return;
  }

  // verifica que la contraseña tenga al menos 8 caracteres
  //if (password.length < 8) {
  //  alert('La contraseña debe tener al menos 8 caracteres.');
  //  return;
  //}

  // envía el formulario si todo está correcto
  alert('El formulario se ha enviado correctamente.');
  form.submit();
});
