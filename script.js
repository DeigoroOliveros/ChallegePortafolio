

// Seleccionamos el formulario
const formulario = document.querySelector('.contacto__formulario');

// Agregamos un evento de envío
formulario.addEventListener('submit', (event) => {
  event.preventDefault(); // Evitamos el envío del formulario por defecto

  // Obtenemos los valores de los campos
  const nombre = document.querySelector('.contacto__campo').value.trim();
  const email = document.querySelector('.contacto__campo:nth-child(2)').value.trim();
  const mensaje = document.querySelector('.contacto__campo--textarea').value.trim();

  // Validación de campos
  if (!nombre || !email || !mensaje) {
    alert('Por favor, completa todos los campos.');
    return; // Salimos de la función si hay campos vacíos
  }

  // Validación de formato de correo electrónico (opcional)
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(emailPattern)) {
    alert('Por favor, introduce un correo electrónico válido.');
    return; // Salimos de la función si el formato del email no es válido
  }

  // Aquí puedes realizar acciones con los datos, como enviarlos a un servidor
  console.log('Nombre:', nombre);
  console.log('Correo:', email);
  console.log('Mensaje:', mensaje);

  // Mostrar un mensaje de éxito al usuario
  alert('¡Mensaje enviado correctamente!');
  formulario.reset(); // Limpiamos el formulario
});



//FUNCIÓN DESPLAZAMIENTO


function smoothScroll(targetId, duration) {
  const targetElement = document.getElementById(targetId);
  if (!targetElement) return;

  const startPosition = window.scrollY || window.pageYOffset;
  const targetPosition = targetElement.getBoundingClientRect().top + startPosition;
  let startTime = null;

  function animation(currentTime) {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = ease(timeElapsed, startPosition, targetPosition - startPosition, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
  }

  function ease(t, b, c, d) {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
  }

  requestAnimationFrame(animation);
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      smoothScroll(targetId, 800);
  });
});

window.addEventListener("resize", () => {
  const elements = document.querySelectorAll(".aficiones__icono, .formacion__icono, .proyectos__contenedor img, .redes__img img, .habilidades__icono1, .habilidades__icono");
  
  if (window.innerWidth <= 480) {
      elements.forEach(element => {
          element.style.transform = "none";
      });
  } else {
      elements.forEach(element => {
          element.style.transform = ""; // Restaura transform si es necesario
      });
  }
});

// Inicialización al cargar la página
window.dispatchEvent(new Event("resize"));



//BOTÓN VOLVER AL INCIO

// Mostrar/ocultar el botón según la posición de desplazamiento
window.addEventListener('scroll', function() {
  const backToTopButton = document.getElementById('backToTop');
  if (window.scrollY > 300) {
      backToTopButton.style.display = 'block';
  } else {
      backToTopButton.style.display = 'none';
  }
});


document.getElementById('backToTop').addEventListener('click', function() {
  smoothScroll('inicio', 800); // Reemplaza 'inicio' por el id de tu cabecera si es diferente
});
