// Animación Ícono Menú
let elementoMenu = document.getElementsByClassName('icono-menu')[0];

elementoMenu.addEventListener('click', function(event) {
    elementoMenu.classList.toggle('activo');

    // Secciones opacity, se obtienen todas las secciones como un listado HTMLCollection
    let secciones = document.getElementsByClassName('flex');

    // Se recorre uno por uno los elementos y se le agrega la clase opacity
    for (var i = 0; i < secciones.length; i++) {
        secciones[i].classList.toggle('clase-opacity');
    }
});