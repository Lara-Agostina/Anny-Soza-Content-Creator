/* script.js */

// 1. Efecto de desplazamiento suave
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// 2. Hacer el header "pegajoso"
const header = document.querySelector('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
});
// ¡No olvides añadir el CSS para la clase .sticky!

/* script.js */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Desplazamiento Suave (Smooth Scrolling)
    // Hace que al hacer clic en un enlace del menú, la página se desplace suavemente
    // hasta la sección en lugar de saltar directamente.
    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            // Obtiene el ID de la sección (ej. #biografia)
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth' // Esta es la propiedad clave para el desplazamiento suave
                });
            }
        });
    });

    // 2. Header "Pegajoso" (Sticky Header)
    // La barra de navegación se mantendrá visible en la parte superior al hacer scroll.
    const header = document.querySelector('header');
    
    // Función que agrega/quita la clase 'sticky' basada en la posición del scroll.
    const handleScroll = () => {
        if (window.scrollY > 50) { // Si el usuario se ha desplazado más de 50px
            header.classList.add('sticky');
        } else {
            header.classList.remove('sticky');
        }
    };

    window.addEventListener('scroll', handleScroll);
});