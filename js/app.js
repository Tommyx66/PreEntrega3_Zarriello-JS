const shopContent = document.getElementById("shopContent");
const verCarrito = document.getElementById("verCarrito");
const modalContainer = document.getElementById("modalContainer");
const cantidadCarrito = document.getElementById("cantidadCarrito");

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

productos.forEach((product) => {
  let content = document.createElement("div");
  content.className = "card";
  content.innerHTML = `
        <img src="${product.image}">
        <h4>${product.title}</h4>
        <p class="price">$${product.price}</p>`;

  shopContent.append(content);

  let comprar = document.createElement("button")
  comprar.innerText = "comprar";
  comprar.className = "comprar";

  content.append(comprar);

  comprar.addEventListener("click", () => {
    const repeat = carrito.some((repeatProduct) => repeatProduct.id === product.id);

    if (repeat) {
      carrito.map((prod) => {
        if (prod.id === product.id) {
          prod.cantidad++;
        }
      });
    } else {
      carrito.push({
        id: product.id,
        image: product.image,
        title: product.title,
        price: product.price,
        cantidad: product.cantidad,
      });
      carritoCounter();
      saveLocal();
    }

  })
});


//set item
const saveLocal = () => {
  localStorage.setItem("carrito", JSON.stringify(carrito));
};

//get item

JSON.parse(localStorage.getItem("carrito"));


/* 
fetch("/js/api.json")
  .then((response) => response.json())
  .then((data) => {
    showProducts(data);
  })

const showProducts = (data) => {
  data.forEach((product) => {
    let content = document.createElement("div");
    content.className = "card";
    content.innerHTML = `
        <img src="${product.image}">
        <h5>${product.title}</h5>
        <p>$${product.price}</p>`;

    shopContent.append(content);

  })
}; */