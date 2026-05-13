const misEstudios = [
    {
        titulo: "Grado Superior DAW",
        centro: "Juan Bosco",
        descripcion: "Primer año de Desarrollo de Aplicaciones Web.",
        fecha: "2025 - Actualidad"
    },
    {
        titulo: "Grado Medio Sistemas Microinformaticos y Redes",
        centro: "Julian Zarco",
        descripcion: "Finalizado",
        fecha: "2023 - 2025"
    }
];

const cargarEstudios = (listaEstudios) => {
    const contenedor = document.getElementById('contenedor-estudios');
    if (!contenedor) return;

    listaEstudios.forEach(estudio => {
        const card = document.createElement('div');
        card.className = 'proyecto-card'; 

        card.innerHTML = `
            <h3>${estudio.titulo}</h3>
            <p><strong>${estudio.centro}</strong></p>
            <p>${estudio.descripcion}</p>
            <small>${estudio.fecha}</small>
        `;

        contenedor.appendChild(card);
    });
};

document.addEventListener('DOMContentLoaded', () => {
    cargarEstudios(misEstudios);

    const btnTheme = document.getElementById('theme-toggle');
    const body = document.body;
    const main = document.querySelector('main');

    const formularios = document.querySelectorAll('#contacto form');
    const inputs = document.querySelectorAll('input, textarea');

    const aplicarColores = (modo) => {
        const esOscuro = modo === 'dark';

        const todasLasTarjetas = document.querySelectorAll('.proyecto-card');
        
        todasLasTarjetas.forEach(card => {
            card.style.backgroundColor = esOscuro ? "#2d2d2d" : "#f9f9f9";
            card.style.borderColor = esOscuro ? "#444" : "#ddd";
            card.style.color = esOscuro ? "white" : "black";
        });

        body.style.backgroundColor = esOscuro ? "black" : "#f4f4f4";
        body.style.color = esOscuro ? "white" : "black";
        
        if (main) {
            main.style.backgroundColor = esOscuro ? "#1a1a1a" : "white";
            main.style.color = esOscuro ? "white" : "black";
        }

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