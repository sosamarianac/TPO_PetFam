const form = document.querySelector('form');
const slider = document.querySelector('.nosotros');


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

//seccion scroll perfil

let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
  isDown = true;
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});

slider.addEventListener('mouseleave', () => {
  isDown = false;
});

slider.addEventListener('mouseup', () => {
  isDown = false;
});

slider.addEventListener('mousemove', (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 2; // Se puede ajustar la velocidad
  slider.scrollLeft = scrollLeft - walk;
});


// seccion pop-up fotos nuestras mascotas

//perfil-1
const miMascotaBtn1 = document.getElementById('mi-mascota-perfil1');
const popup1 = document.getElementById('popup-perfil1');
const popupCloseBtn1 = document.getElementById('popup-close-perfil1');

miMascotaBtn1.addEventListener('click', () => {
    popup1.style.display = 'block';
});

popupCloseBtn1.addEventListener('click', () => {
    popup1.style.display = 'none';
});
// Perfil-2
const miMascotaBtn2 = document.getElementById('mi-mascota-perfil2');
const popup2 = document.getElementById('popup-perfil2');
const popupCloseBtn2 = document.getElementById('popup-close-perfil2');

miMascotaBtn2.addEventListener('click', () => {
    popup2.style.display = 'block';
});

popupCloseBtn2.addEventListener('click', () => {
    popup2.style.display = 'none';
});

// Perfil-3
const miMascotaBtn3 = document.getElementById('mi-mascota-perfil3');
const popup3 = document.getElementById('popup-perfil3');
const popupCloseBtn3 = document.getElementById('popup-close-perfil3');

miMascotaBtn3.addEventListener('click', () => {
    popup3.style.display = 'block';
});

popupCloseBtn3.addEventListener('click', () => {
    popup3.style.display = 'none';
});

//perfil-4
const miMascotaBtn4 = document.getElementById('mi-mascota-perfil4');
const popup4 = document.getElementById('popup-perfil4');
const popupCloseBtn4 = document.getElementById('popup-close-perfil4');

miMascotaBtn4.addEventListener('click', () => {
    popup4.style.display = 'block';
});

popupCloseBtn4.addEventListener('click', () => {
    popup4.style.display = 'none';
});


// popup-formulario adoptame

//form-adoptar
function togglePopup() {
  var popup = document.getElementById('popup-form');
  popup.style.display = (popup.style.display === 'none') ? 'flex' : 'none';
}


// boton cambio de tips


const boton1 = document.getElementById('boton1');
const boton2 = document.getElementById('boton2');
const contenido1 = document.getElementById('contenido1');
const contenido2 = document.getElementById('contenido2');
const contenido3 = document.getElementById('contenido3');
const contenido4 = document.getElementById('contenido4');
const contenido5 = document.getElementById('contenido5');
const contenido6 = document.getElementById('contenido6');

boton1.addEventListener('click', function() {
  contenido1.style.display = "block";
  contenido2.style.display = "block";
  contenido3.style.display = "block";
  contenido4.style.display = "none";
  contenido5.style.display = "none";
  contenido6.style.display = "none";
});


boton2.addEventListener('click', function() {
  contenido1.style.display = "none";
  contenido2.style.display = "none";
  contenido3.style.display = "none";
  contenido4.style.display = "block";
  contenido5.style.display = "block";
  contenido6.style.display = "block";
});
