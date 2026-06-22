// Validación de pedido floral
function validarPedido() {
    const nombre = document.getElementById("nombre").value.trim();
    const direccion = document.getElementById("direccion").value.trim();
    const arreglo = document.getElementById("arreglo").value;

    if (nombre && direccion && arreglo) {
        alert(`✅ Pedido confirmado: ${arreglo} para ${nombre}, entrega en ${direccion}.`);
    } 
    else {
        alert("⚠️ Debes completar todos los datos del pedido.");
    }
}

// Función para validar fechas de pedido y entrega
function verificarFechas() {
    const pedido = document.getElementById("fechaPedido").value;
    const entrega = document.getElementById("fechaEntrega").value;

    if (!pedido || !entrega) {
        alert("⚠️ Ingresa ambas fechas.");
        return;
    }

    const fechaPedido = new Date(pedido);
    const fechaEntrega = new Date(entrega);

    if (fechaPedido > fechaEntrega) {
        alert("❌ Error: La fecha de pedido no puede ser posterior a la fecha de entrega.");
    } else {
        alert(`✅ Su pedido con fecha ${fechaPedido.toLocaleDateString()} tiene fecha de entrega disponible para el ${fechaEntrega.toLocaleDateString()}.`);
    }
}

// Personalización de tarjeta con imágenes y opciones
function personalizarTarjeta() {
  const op1 = document.getElementById("op1").checked;
  const op2 = document.getElementById("op2").checked;
  const op3 = document.getElementById("op3").checked;
  const tematica = document.getElementById("tematica").value;
  const de = document.getElementById("de").value.trim();
  const mensaje = document.getElementById("mensaje").value.trim();

  const vista = document.getElementById("vistaTarjeta");

  if (!tematica || !de || !mensaje) {
    alert("⚠️ Debes seleccionar una temática y escribir el remitente y mensaje.");
    return;
  }

  let opciones = [];
  if (op1) opciones.push("Sobre con timbre");
  if (op2) opciones.push("Sobre con ramillete");
  if (op3) opciones.push("Tarjeta con fragancia");

  let imagen = "";
  switch (tematica) {
    case "aniversario":
      vista.style.backgroundColor = "#ffe4e1";
      vista.style.color = "#a61e4d";
      imagen = "img/aniversario.jpg";
      break;
    case "condolencias":
      vista.style.backgroundColor = "#f0f0f0";
      vista.style.color = "#333";
      imagen = "img/condolencias.jpg";
      break;
    case "felicidades":
      vista.style.backgroundColor = "#fff9c4";
      vista.style.color = "#795548";
      imagen = "img/felicidades.jpg";
      break;
    case "arrepentimiento":
      vista.style.backgroundColor = "#f8bbd0";
      vista.style.color = "#880e4f";
      imagen = "img/arrepentimiento.jpg";
      break;
  }

  vista.innerHTML = `
    <h4>🌸 Tarjeta ${tematica.charAt(0).toUpperCase() + tematica.slice(1)} 🌸</h4>
    <p><b>De:</b> ${de}</p>
    <p><b>Mensaje:</b> ${mensaje}</p>
    <p><b>Opciones:</b> ${opciones.length > 0 ? opciones.join(", ") : "Ninguna seleccionada"}</p>
    <img src="${imagen}" alt="Imagen temática" style="max-width:100%;border-radius:8px;margin-top:10px;">
  `;
}

// Función para vista previa en ventana emergente
function vistaPreviaTarjeta() {
  const tematica = document.getElementById("tematica").value;
  const de = document.getElementById("de").value.trim();
  const mensaje = document.getElementById("mensaje").value.trim();

  if (!tematica || !de || !mensaje) {
    alert("⚠️ Completa la temática, remitente y mensaje antes de la vista previa.");
    return;
  }

  const op1 = document.getElementById("op1").checked ? "Sobre con timbre" : "";
  const op2 = document.getElementById("op2").checked ? "Sobre con ramillete" : "";
  const op3 = document.getElementById("op3").checked ? "Tarjeta con fragancia" : "";
  const opciones = [op1, op2, op3].filter(Boolean).join(", ") || "Ninguna seleccionada";

  let imagen = "";
  switch (tematica) {
    case "aniversario": imagen = "img/aniversario.jpg"; break;
    case "condolencias": imagen = "img/condolencias.jpg"; break;
    case "felicidades": imagen = "img/felicidades.jpg"; break;
    case "arrepentimiento": imagen = "img/arrepentimiento.jpg"; break;
  }

  const ventana = window.open("", "VistaPrevia", "width=450,height=500");
  ventana.document.write(`
    <html>
    <head>
      <title>Vista Previa Tarjeta</title>
      <style>
        body { font-family: 'Segoe UI', sans-serif; text-align:center; background:#fffafc; }
        .card { margin:20px auto; padding:20px; border-radius:12px; background:#ffffff;
                box-shadow:0 4px 10px rgba(0,0,0,0.15); width:90%; }
        h3 { color:#d63384; }
        img { max-width:100%; border-radius:10px; margin-top:15px; box-shadow:0 3px 8px rgba(0,0,0,0.2); }
      </style>
    </head>
    <body>
      <div class="card">
        <h3>🌸 Tarjeta ${tematica.charAt(0).toUpperCase() + tematica.slice(1)} 🌸</h3>
        <p><b>De:</b> ${de}</p>
        <p><b>Mensaje:</b> ${mensaje}</p>
        <p><b>Opciones:</b> ${opciones}</p>
        <img src="${imagen}" alt="Imagen temática">
      </div>
    </body>
    </html>
  `);
}


// Función para validar todo el formulario principal
function hacerPedido() {
  const nombre = document.getElementById("nombre").value.trim();
  const direccion = document.getElementById("direccion").value.trim();
  const arreglo = document.getElementById("arreglo").value;
  const fechaPedido = document.getElementById("fechaPedido").value;
  const fechaEntrega = document.getElementById("fechaEntrega").value;

  if (!nombre || !direccion || !arreglo || !fechaPedido || !fechaEntrega) {
    alert("⚠️ Debes completar todos los campos antes de hacer el pedido.");
    return;
  }

  alert("✅ Pedido realizado");
}

// Función para botón "Agregar tarjeta personalizada"
function agregarTarjeta() {
  alert("✅ Solicitud de tarjeta personalizada Enviada");
}
