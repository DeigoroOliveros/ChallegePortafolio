// script.js
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Seleccionamos el formulario
const form = document.getElementById('contact-form');

// Agregamos un evento al formulario para manejar el envío
form.addEventListener('submit', function (event) {
  // Prevenir el comportamiento por defecto del formulario
  event.preventDefault();

  // Capturar los datos del formulario
  const nombre = document.getElementById('nombre').value.trim();
  const correo = document.getElementById('correo').value.trim();
  const descripcion = document.getElementById('descripcion').value.trim();

  // Validar que los campos no estén vacíos
  if (!nombre || !correo || !descripcion) {
    alert('Por favor, completa todos los campos.');
    return;
  }

  // Simular el envío del formulario y mostrar un mensaje de éxito
  alert(`Gracias por contactarnos, ${nombre}. Hemos recibido tu mensaje: "${descripcion}". Responderemos a tu correo (${correo}) lo antes posible.`);

  // Resetear el formulario
  form.reset();
});
