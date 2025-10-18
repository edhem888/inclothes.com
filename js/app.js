document.addEventListener("DOMContentLoaded", () => {
    const diapositivasGrandes = document.querySelectorAll('.diapositiva-grande');
    let indiceDiapositivaGrande = 0;
    let intervaloAutoPlayGrande;

    function mostrarDiapositivasGrandes() {
        diapositivasGrandes.forEach(slide => {
            slide.style.display = 'none';
        });

        if (indiceDiapositivaGrande >= diapositivasGrandes.length) {
            indiceDiapositivaGrande = 0;
        }
        if (indiceDiapositivaGrande < 0) {
            indiceDiapositivaGrande = diapositivasGrandes.length - 1;
        }

        diapositivasGrandes[indiceDiapositivaGrande].style.display = 'block';
        }
    function iniciarAutoPlayGrande() {
        intervaloAutoPlayGrande = setInterval(() => {
            indiceDiapositivaGrande++;
            mostrarDiapositivasGrandes();
        }, 5000);
    }

    function detenerAutoPlayGrande() {
        clearInterval(intervaloAutoPlayGrande);
    }

    if (diapositivasGrandes.length > 0) {
        mostrarDiapositivasGrandes();
        iniciarAutoPlayGrande();
    }
    
});
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.menu');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('activo');
        });
    }

    const allLinks = document.querySelectorAll('.menu a');
    allLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('activo')) {
                navLinks.classList.remove('activo');
            }
        });
    });
});