const saveProductosCarrito = () => {
    localStorage.setItem("carrito", JSON.stringify(productos));
}

const loadProductosCarrito = () =>{
    return JSON.parse(localStorage.getItem("carrito")) || [];
}

const estaEnElCarrito = (id) => {
    const productos_carrito = loadProductosCarrito();

    return productos_carrito.some(item => item.id === id);
}

const agregarAlCarrito = (id) => {
    const productos = loadProductosLS();
    const productos_carrito = loadProductosCarrito();


    if (estaEnElCarrito(id)) {
        let pos = productos_carrito.findIndex (item => item.id === id);
        productos_carrito[pos].cantidad += 1;
    } else {
        const producto = productos.find(item => item.id === id);
        producto.cantidad = 1;
        productos_carrito.push(producto);
    }

    const productos_carrito = loadProductosCarrito();
    const producto = productos.find(item => item.id === id);
    
    productos_carrito.push(producto);
    saveProductosCarrito(productos_carrito);
    renderBotonCarrito();
}

const vaciarCarrito = () =>{
    localStorage.removeItem("carrito");
    renderProductosCarrito();
    renderBotonCarrito();
}

const totalCarrito = () => {
    const productos_carrito = loadProductosTotalCarrito();

    return productos_carrito.length;
} 

const sumaCarrito = () => {
    const productos_carrito = loadProductosTotalCarrito();

    return productos_carrito.reduce((total, item) => total += item.precio, 0);
} 


const renderBotonCarrito = () => {
    let salida = `<button type="button" class="btn btn-primary position-relative">
    <img src="multimedia/icono/market.svg" alt="Carrito" bg-warning width=W"24">
    <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">${totalCarrito}
    </span>
  </button>`;
    document.getElementById("productos").innerHTML = salida;
}

