const productos = [
    {
        id: 1,
        nombre: "Notebook de alta gama",
        precio: "$450.000",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSkO4zFZJBPWlvBzBJhRainZWbzpsxG2_u0oaauWJb-g&s",
        descripcion: "Notebook de alto rendimiento ideal para trabajo pesado, edición y juegos."
    },
    {
        id: 2,
        nombre: "Audífonos con orejas de gato",
        precio: "$65.000",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWpFPEspB6PLeXvD4-gGgF2Snl-WBw0TzXW-NTvHPvNw&s=10",
        descripcion: "Audífonos inalámbricos con luces LED en las orejas y excelente calidad de sonido."
    },
    {
        id: 3,
        nombre: "Teclado Ergonómico",
        precio: "$85.000",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeOERD1O9oTa2TZSF2xeOUWsqD3jRmFa835XMzFDsqQg&s=10",
        descripcion: "Teclado diseñado para reducir la fatiga en las muñecas con teclas silenciosas."
    }
];

document.addEventListener("DOMContentLoaded", () => {
    // Manejo del contador del carrito
    const visorContador = document.getElementById("contador-carrito");
    let contador = parseInt(localStorage.getItem("contadorCarrito")) || 0;

    if (visorContador) {
        visorContador.textContent = contador;
    }

    function agregarAlCarrito() {
        contador++;
        localStorage.setItem("contadorCarrito", contador);
        if (visorContador) {
            visorContador.textContent = contador;
        }
    }

    
    document.querySelectorAll(".btn-agregar").forEach(btn => {
        btn.addEventListener("click", agregarAlCarrito);
    });

    
    const fichaDetalle = document.getElementById("ficha-detalle");
    if (fichaDetalle) {
        const idParam = new URLSearchParams(window.location.search).get("id");
        const producto = productos.find(p => p.id === parseInt(idParam));

        if (producto) {
            fichaDetalle.innerHTML = `
                <img src="${producto.imagen}" alt="${producto.nombre}" class="imagen-ficha">
                <div class="info-ficha">
                    <h2>${producto.nombre}</h2>
                    <p class="precio">${producto.precio}</p>
                    <p class="descripcion">${producto.descripcion}</p>
                    <button class="btn-agregar" id="btn-ficha-add">Agregar al carrito</button>
                </div>
            `;
            document.getElementById("btn-ficha-add").addEventListener("click", agregarAlCarrito);
        } else {
            fichaDetalle.innerHTML = "<p>Producto no encontrado.</p>";
        }
    }
});