// Animación Ícono Menú
let elementoMenu = document.getElementsByClassName('icono-menu')[0];

elementoMenu.addEventListener('click', function(event) {
    elementoMenu.classList.toggle('activo');
});

// Submenu desplegable, se obtienen todos los enlaces como un listado HTMLCollection
let menuPadre = document.getElementsByClassName('enlace');


// Se recorre uno por uno los elementos y se le agrega un listener para el click
for (var i = 0; i < menuPadre.length; i++) {
    menuPadre[i].addEventListener('click', function(event) {
        this.classList.toggle('activo');
    });
}