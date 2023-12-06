const user = JSON.parse(localStorage.getItem('login_success')) || false;
if (!user) {
    window.location.href = 'login.html';
}
const logout = document.querySelector('#logout');
logout.addEventListener('click', () => {
    alert('Hasta pronto!');
    localStorage.removeItem('login_success');
    window.location.href = 'login.html';
});
window.addEventListener("DOMContentLoaded", (event) => {
    const productos = [
        { nombre: "Coca Cola", precio: 1500 },
        { nombre: "Pepsi", precio: 1200 },
        { nombre: "Torasso", precio: 650 },
        { nombre: "Secco", precio: 750 },
        { nombre: "Sprite", precio: 1500 },
        { nombre: "Fanta", precio: 1500 },
        { nombre: "Ibera", precio: 600 },
        { nombre: "Crush", precio: 550 },
    ];

    let carrito = [];

    let seleccion = prompt("Hola, ¿Deseas comprar alguna bebida?");

    while (seleccion != "Si" && seleccion != "No") {
        alert("Indica Si o No para adquirir el producto");
        seleccion = prompt("¿Deseas comprar alguna bebida?");
    }

    if (seleccion === "Si") {
        alert("Éste es nuestro stock de bebidas");
        let losProductos = productos.map((producto) => producto.nombre + " " + producto.precio + "$"
        );
        alert(losProductos.join("  -  "));
    } else if (seleccion === "No") {
        alert("Gracias por pasarte, hasta luego!");
    }

    while (seleccion != "No") {
        let producto = prompt("Agrega la bebida al carrito");
        let precio = 0;

        if (producto === "Coca Cola" || producto === "Pepsi" || producto === "Torasso" || producto === "Secco" || producto === "Sprite" || producto === "Fanta" || producto === "Ibera" || producto === "Crush") {
            switch (producto) {
                case "Coca Cola":
                    precio = 1500;
                    break;
                case "Pepsi":
                    precio = 1200;
                    break;
                case "Torasso":
                    precio = 650;
                    break;
                case "Secco":
                    precio = 750;
                    break;
                case "Sprite":
                    precio = 1500;
                    break;
                case "Fanta":
                    precio = 1500;
                    break;
                case "Ibera":
                    precio = 600;
                    break;
                case "Crush":
                    precio = 550;
                    break;
                default:
                    break;
            }
            let unidades = parseInt(prompt("¿Cuántas unidades quieres llevar?"));
            carrito.push({ producto, unidades, precio });
            console.log(carrito);
        } else {
            alert("Nos quedamos sin stock de esa bebida");
        }

        seleccion = prompt("¿Deseas seguir comprando?");

        while (seleccion === "No") {
            alert("Gracias por tu compra!");
            carrito.forEach((carritoStock) => {
                console.log(`producto: ${carritoStock.producto}, unidades: ${carritoStock.unidades}, Total a pagar por bebida ${carritoStock.unidades * carritoStock.precio}}`);
            });
            break;
        }
    }

    const total = carrito.reduce((acc, el) => acc + el.precio * el.unidades, 0);
    alert(`El total a pagar de su compra es: ${total}`);

    document.addEventListener("keyup", e => {

        if (e.target.matches("#buscador")) {

            if (e.key === "Escape") e.target.value = "";

            document.querySelectorAll(".articulo").forEach(gaseosas => {

                gaseosas.textContent.toLowerCase().includes(e.target.value.toLowerCase())
                    ? gaseosas.classList.remove("filtro")
                    : gaseosas.classList.add("filtro");
            });

        }


    });

});
