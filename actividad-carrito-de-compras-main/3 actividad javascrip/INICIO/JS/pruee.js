let contadorCarrito = 0;

window.addEventListener('keydown', (e) => {
    if (e.key === '+') {
        agregarAlCarrito();
    } else if (e.key === '-') {
        restarDelCarrito();
    }
});

// Event listener for the reset button
document.getElementById('resetearBtn').addEventListener('click', () => {
    resetearContador();
});

function agregarAlCarrito() {
    contadorCarrito++;
    actualizarCarrito();
}

function restarDelCarrito() {
    if (contadorCarrito > 0) {
        contadorCarrito--;
    }
    actualizarCarrito();
}

function actualizarCarrito() {
    document.getElementById('contadorCarrito').innerText = contadorCarrito;
}

function resetearContador() {
    contadorCarrito = 0;
    actualizarCarrito();
}
