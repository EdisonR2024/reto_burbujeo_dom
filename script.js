function configurarEvento() {
    const elementoPadre = document.getElementById('padre');
    const elementoHijo = document.getElementById('hijo');

    elementoPadre.addEventListener('click', (event) => {
        alert('Click en Padre');
        console.log(event);
    }, true);

    elementoHijo.addEventListener('click', (event) => {
        alert('Click en Hijo');
        console.log(event);
    },true);

}

configurarEvento();