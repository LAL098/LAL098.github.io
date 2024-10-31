// Función para cargar la sección y resaltar la pestaña activa
function cargarSeccion(archivo, link) {
    fetch(`sections/${archivo}`)
        .then(response => {
            if (!response.ok) throw new Error('Error al cargar la sección');
            return response.text();
        })
        .then(data => {
            document.getElementById('contenido').innerHTML = data;
            resaltarPestañaActiva(link);
        })
        .catch(error => {
            document.getElementById('contenido').innerHTML = `<p>Error: ${error.message}</p>`;
        });
}

// Función para resaltar la pestaña activa
function resaltarPestañaActiva(link) {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(navLink => {
        navLink.classList.remove('active');
        if (navLink.getAttribute('onclick').includes(link)) {
            navLink.classList.add('active');
        }
    });
}

// Cargar la página de inicio por defecto una vez que el DOM esté completamente cargado
window.addEventListener('DOMContentLoaded', () => {
    cargarSeccion('inicio.html', 'inicio.html');
});