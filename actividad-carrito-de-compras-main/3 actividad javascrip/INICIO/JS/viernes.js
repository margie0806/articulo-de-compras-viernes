let contadorCarrito = 0;
const precioPrenda = 150.000; // Puedes ajustar esto según el precio real del Bolso

// Add an event listener for keydown events
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

// Event listener for the multiply button
document.getElementById('multiplicarBtn').addEventListener('click', () => {
    const cantidad = parseInt(prompt('Ingrese la cantidad por la cual multiplicar el contador:'), 10);
    if (!isNaN(cantidad) && cantidad > 0) {
        multiplicarPorCantidad(cantidad);
    } else {
        alert('Por favor, ingrese un número válido mayor que 0.');
    }
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
    const total = contadorCarrito * precioPrenda;
    document.getElementById('contadorCarrito').innerText = `Total: $${total}`;
}

function resetearContador() {
    contadorCarrito = 0;
    actualizarCarrito();
}

function multiplicarPorCantidad(cantidad) {
    contadorCarrito *= cantidad;
    actualizarCarrito();
}
