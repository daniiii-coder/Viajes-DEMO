const boton = document.querySelector('button');
const cajaMensaje = document.getElementById('mensaje');

boton.addEventListener('click', function() {
    cajaMensaje.textContent = '¡Próximamente añadiremos destinos increíbles!';
});