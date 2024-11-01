// Array de páginas para mantener el historial
const pages = ['index.html', 'sections/nosotros.html', 'sections/servicios.html', "sections/contacto.html"];
let currentPageIndex = 0;

// Obtener el índice de la página actual
function getCurrentPageIndex() {
    const currentPath = window.location.pathname;
    const pageName = currentPath.split('/').pop() || 'index.html';
    return pages.indexOf(pageName);
}

// Función para cargar una nueva página con efecto de transición
function loadPage(url) {
    const content = document.querySelector('.content');
    content.classList.add('fade');
    
    setTimeout(() => {
        window.location.href = url;
    }, 300);
}

// Configurar los event listeners cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    currentPageIndex = getCurrentPageIndex();
    
    // Configurar el botón de inicio
    const startButton = document.getElementById('startButton');
    if (startButton) {
        startButton.addEventListener('click', (e) => {
            e.preventDefault();
            loadPage('sections/nosotros.html');
        });
    }
    
    // Configurar el botón de retroceso
    const backButton = document.getElementById('backButton');
    if (backButton) {
        if (currentPageIndex <= 0) {
            backButton.style.display = 'none';
        } else {
            backButton.addEventListener('click', (e) => {
                e.preventDefault();
                loadPage(pages[currentPageIndex - 1]);
            });
        }
    }
    
    // Configurar el botón de avance
    const forwardButton = document.getElementById('forwardButton');
    if (forwardButton) {
        if (currentPageIndex >= pages.length - 1) {
            forwardButton.style.display = 'none';
        } else {
            forwardButton.addEventListener('click', (e) => {
                e.preventDefault();
                loadPage(pages[currentPageIndex + 1]);
            });
        }
    }
});