const shopContent = document.getElementById("shopContent");

let carrito = [];

productos.forEach((product) => {
    let content= document.createElement("div");
    content.className = "card";
    content.innerHTML = `
        <img src="${product.image}">
        <h5>${product.title}</h5>
        <p>$${product.price}</p>`;

    shopContent.append(content);

    let comprar = document.createElement("button")
    comprar.innerText = "comprar";
    comprar.className = "comprar";

    content.append(comprar);

});




/* const guardarProductosLS = (productos) => {
    localStorage.setItem("productos", JSON.stringify(productos));
  }
  
  const cargarProductosLS = () => {
    return JSON.parse(localStorage.getItem("productos")) || [];
  }
  
  guardarProductosLS(productos);
   */