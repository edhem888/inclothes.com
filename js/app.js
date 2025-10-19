document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.menu'); 
    const navItems = document.querySelectorAll('.menu a'); 

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('activo'); 
        });
    }

    navItems.forEach(item => {
        item.addEventListener('click', () => {
            if (navMenu.classList.contains('activo')) {
                navMenu.classList.remove('activo');
            }
        });
    });
});

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
