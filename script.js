const form = document.getElementById('form');

form.addEventListener('submit', e => {
  e.preventDefault();

  alert('Mensaje enviado');

  form.name.value = '';
  form.email.value = '';
  form.message.value = '';

});