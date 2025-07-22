document.addEventListener("DOMContentLoaded", function () {
    const botonSaludo = document.getElementById("btnSaludar");

    if (botonSaludo) {
        botonSaludo.addEventListener("click", function () {
            lanzarConfeti();
        });
    }

    function lanzarConfeti() {
        for (let i = 0; i < 100; i++) {
            const confeti = document.createElement('div');
            confeti.classList.add('confeti');

            confeti.style.left = Math.random() * 100 + 'vw';
            confeti.style.animationDuration = 1 + Math.random() * 2 + 's';
            confeti.style.opacity = Math.random();
            confeti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;

            document.body.appendChild(confeti);

            setTimeout(() => {
                confeti.remove();
            }, 3000);
        }
    }
});
