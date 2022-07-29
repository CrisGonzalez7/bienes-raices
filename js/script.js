// Animación Ícono Menú
let elementoMenu = document.getElementsByClassName('icono-menu')[0];

elementoMenu.addEventListener('click', function() {
    elementoMenu.classList.toggle('activo');
});

// Submenu desplegable, se obtienen todos los enlaces como un listado HTMLCollection
let menuPadre = document.getElementsByClassName('enlace');


// Se recorre uno por uno los elementos y se le agrega un listener para el click
for (const element of menuPadre) {
    element.addEventListener('click', function() {
        this.classList.toggle('activo');
    });
}