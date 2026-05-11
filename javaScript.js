document.addEventListener('DOMContentLoaded', () => {
    const btnTheme = document.getElementById('theme-toggle');
    const body = document.body;
    const main = document.querySelector('main');

    const tarjetas = document.querySelectorAll('.proyecto-card');
    const formularios = document.querySelectorAll('#contacto form');
    const inputs = document.querySelectorAll('input, textarea');

    const aplicarColores = (modo) => {
        const esOscuro = modo === 'dark';


        body.style.backgroundColor = esOscuro ? "black" : "#f4f4f4";
        body.style.color = esOscuro ? "white" : "black";
        
        if (main) {
            main.style.backgroundColor = esOscuro ? "#1a1a1a" : "white";
            main.style.color = esOscuro ? "white" : "black";
        }


        tarjetas.forEach(card => {
            card.style.backgroundColor = esOscuro ? "#2d2d2d" : "#f9f9f9";
            card.style.borderColor = esOscuro ? "#444" : "#ddd";
            card.style.color = esOscuro ? "white" : "black";
        });


        formularios.forEach(form => {
            form.style.backgroundColor = esOscuro ? "#2d2d2d" : "#f9f9f9";
            form.style.borderColor = esOscuro ? "#444" : "#ddd";
        });

        inputs.forEach(input => {
            input.style.backgroundColor = esOscuro ? "#333" : "white";
            input.style.color = esOscuro ? "white" : "black";
            input.style.borderColor = esOscuro ? "#555" : "#ccc";
        });


        btnTheme.textContent = esOscuro ? 'Modo Claro' : 'Modo Oscuro';
        localStorage.setItem('theme', modo);
    };


    const temaGuardado = localStorage.getItem('theme');
    aplicarColores(temaGuardado === 'dark' ? 'dark' : 'light');


    btnTheme.addEventListener('click', () => {
        const seraOscuro = localStorage.getItem('theme') !== 'dark';
        aplicarColores(seraOscuro ? 'dark' : 'light');
    });
});