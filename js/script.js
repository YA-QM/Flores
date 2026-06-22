// Validación de pedido floral
function hacerPedido() {
    const nombre = document.getElementById("nombre").value.trim();
    const direccion = document.getElementById("direccion").value.trim();
    const arreglo = document.getElementById("arreglo").value;
    const fechaPedido = document.getElementById("fechaPedido").value;
    const fechaEntrega = document.getElementById("fechaEntrega").value;

    if (!nombre || !direccion || !arreglo || !fechaPedido || !fechaEntrega) {
        alert("Debes completar todos los campos antes de hacer el pedido.");
        return;
    }

    alert("Pedido realizado");
}

// Función para validar fechas de pedido y entrega
function verificarFechas() {
    const pedido = document.getElementById("fechaPedido").value;
    const entrega = document.getElementById("fechaEntrega").value;

    if (!pedido || !entrega) {
        alert("Ingresa ambas fechas.");
        return;
    }

    const fechaPedido = new Date(pedido);
    const fechaEntrega = new Date(entrega);

    if (fechaPedido > fechaEntrega) {
        alert("Error: La fecha de pedido no puede ser posterior a la fecha de entrega.");
    } 
    else {
        alert(`Su pedido con fecha ${fechaPedido.toLocaleDateString()} tiene disponibilidad de entrega el día ${fechaEntrega.toLocaleDateString()}.`);
    }
}

// Función para vista previa de la tarjeta en ventana emergente con card Bootstrap
function vistaPreviaTarjeta() {
    const tematica = document.getElementById("tematica").value;
    const de = document.getElementById("de").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();

    if (!tematica || !de || !mensaje) {
        alert("Completa la temática, remitente y mensaje antes de la vista previa.");
        return;
    }

    let imagen = "";
    let bordeColor = "#ccc"; 
    let textoColor = "#000"; // color por defecto

    switch (tematica) {
        case "aniversario":
            imagen = "img/Aniversario2.png";
            bordeColor = "#ff80ab";
            textoColor = "#d81b60"; // rosado fuerte
            break;
        case "condolencias":
            imagen = "img/Condolencias2.png";
            bordeColor = "#9e9e9e";
            textoColor = "#424242"; // gris oscuro
            break;
        case "felicidades":
            imagen = "img/Felicidades.png";
            bordeColor = "#ffd54f";
            textoColor = "#aa6000"; // amarillo/naranja
            break;
        case "arrepentimiento":
            imagen = "img/arrepentimiento.jpg";
            bordeColor = "#e57373";
            textoColor = "#c92020"; // rojo intenso
            break;
    }

    const ventana = window.open("", "VistaPrevia", "width=700,height=400");
    ventana.document.write(`
        <html>
        <head>
            <title>Vista Previa Tarjeta</title>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet">
            <style>
                body { font-family: 'Segoe UI', sans-serif; background:#fffafc; margin:0; padding:20px; }
                .card {
                    border: 4px solid ${bordeColor};
                    border-radius: 15px;
                    overflow: hidden;
                }
                .card-img {
                    height: 300px;
                    object-fit: cover;
                }
                .card-img-overlay {
                    background: transparent;
                    border-radius: 15px;
                    display: flex;
                    align-items: center;
                }
                .texto-overlay {
                    width: 50%; /* ocupa solo la mitad */
                    color: ${textoColor};
                    text-shadow: 1px 1px 2px #fff; /* 
                }
            </style>
        </head>
        <body>
        <div class="card bg-dark text-white">
            <img src="${imagen}" class="card-img" alt="Imagen temática">
            <div class="card-img-overlay">
            <div class="texto-overlay">
                <h5 class="card-title">De: ${de}</h5>
                <p class="card-text">${mensaje}</p>
            </div>
            </div>
        </div>
        </body>
        </html>
    `);
}



function agregarTarjeta() {
    alert("Solicitud de tarjeta personalizada Enviada");
}
