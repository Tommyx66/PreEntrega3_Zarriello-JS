const pintarCarrito = () => {
    modalContainer.innerHTML = "";
    modalContainer.style.display = "flex";
    const modalHeader = document.createElement("div");
    modalHeader.className = "modal-header";
    modalHeader.innerHTML = `
    <h1 class="modal-header-title">Carrito.</h1>`;
    modalContainer.append(modalHeader);

    const modalbutton = document.createElement("h1");
    modalbutton.innerHTML = '<h1 class="x-button">x</h1>';
    modalbutton.className = "modal-header-button";

    modalbutton.addEventListener("click", () => {
        modalContainer.style.display = "none";
    });

    modalHeader.append(modalbutton);

    carrito.forEach((product) => {
        let carritoContent = document.createElement("div")
        carritoContent.className = "modal-content"
        carritoContent.innerHTML = `
                                    <img src="${product.image}">
                                    <h4>${product.title}</h4>
                                    <h4 class="pe-5">$${product.price}</h4>
                                    <span class="restar"> - </span>
                                    <h4 class="text-center">Cantidad: ${product.cantidad}</h4>
                                    <span class="sumar"> + </span>
                                    <h4 class="text-end">Total: $${product.cantidad * product.price}</h4>
                                    `;

        modalContainer.append(carritoContent);

        let restar = carritoContent.querySelector(".restar")

        restar.addEventListener("click", () => {
            if(product.cantidad !== 1) {
                product.cantidad--;
                pintarCarrito();
                saveLocal();
            }
        });

        let sumar = carritoContent.querySelector(".sumar")

        sumar.addEventListener("click", () => {
                product.cantidad++;
                pintarCarrito();
                saveLocal();
        });



        let eliminar = document.createElement("span");
        eliminar.innerText = "X";
        eliminar.className = "delete-product";
        carritoContent.append(eliminar);

        eliminar.addEventListener("click", eliminarProducto)

    });

    const total = carrito.reduce((acc, el) => acc + el.price * el.cantidad, 0);

    const totalBuying = document.createElement("div");
    totalBuying.className = "total-content";
    totalBuying.innerHTML = `<h3 class="text-white">Total a pagar: $${total}</h3>`;
    modalContainer.append(totalBuying);
};

verCarrito.addEventListener("click", pintarCarrito);

const eliminarProducto = () => {
    const foundId = carrito.find((element) => element.id);

    carrito = carrito.filter((carritoId) => {
        return carritoId !== foundId;
    });

    carritoCounter();
    saveLocal();
    pintarCarrito();
};

const carritoCounter = () => {
    cantidadCarrito.style.display = "block";

    const carritoLength = carrito.length;

    localStorage.setItem("carritoLength", JSON.stringify(carritoLength));

    cantidadCarrito.innerText = JSON.parse(localStorage.getItem("carritoLength"));

 
};
carritoCounter();
