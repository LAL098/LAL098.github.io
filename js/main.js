function cargarSeccion(archivo) {
    fetch(`sections/${archivo}`)
        .then(response => {
            if (!response.ok) throw new Error('Error al cargar la sección');
            return response.text();
        })
        .then(data => {
            document.getElementById('contenido').innerHTML = data;
        })
        .catch(error => {
            document.getElementById('contenido').innerHTML = `<p>Error: ${error.message}</p>`;
        });
}