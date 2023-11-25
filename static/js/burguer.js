document.addEventListener('DOMContentLoaded', function () {
    // Obtener elementos DOM
    const burgerBtn = document.querySelector('.burger-btn');
    const navLinks = document.querySelector('.nav-links');

    // Agregar evento click al botón de la hamburguesa
    burgerBtn.addEventListener('click', () => {
        // Obtener el contenido actual del botón
        const currentContent = burgerBtn.innerHTML.trim();

        // Cambiar el símbolo y mostrar/ocultar el menú
        if (currentContent === '☰') {
            burgerBtn.innerHTML = '&#10006;'; // Cambia a una cruz
        } else {
            burgerBtn.innerHTML = '☰'; // Cambia de nuevo a las barras de menú
        }

        // Alternar la clase 'active' para mostrar/ocultar el menú
        navLinks.classList.toggle('active');
    });
});