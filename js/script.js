const nombre = document.getElementById("nombre");
const cargo = document.getElementById("cargo");
const telefono = document.getElementById("telefono");
const correo = document.getElementById("correo");

// ===============================
// 🔄 VISTA PREVIA EN TIEMPO REAL
// ===============================
nombre.addEventListener("input", () => {
document.getElementById("prevNombre").innerText = nombre.value || "Nombre Apellido";
});

cargo.addEventListener("input", () => {
document.getElementById("prevCargo").innerText = cargo.value || "Cargo";
});

telefono.addEventListener("input", () => {
document.getElementById("prevTelefono").innerText = "📞 +51 " + (telefono.value || "--- --- ---");
});

correo.addEventListener("input", () => {
document.getElementById("prevCorreo").innerText = "✉ " + (correo.value || "correo@empresa.com");
});

// ===============================
// 📋 COPIAR FIRMA (VERSIÓN GMAIL)
// ===============================
document.getElementById("copiarBtn").addEventListener("click", () => {

// Seleccionamos la firma visual
const firma = document.getElementById("firmaPreview");

// Crear rango de selección
const range = document.createRange();
range.selectNode(firma);

// Limpiar selecciones anteriores
window.getSelection().removeAllRanges();
window.getSelection().addRange(range);

// Copiar como contenido enriquecido (HTML visual)
document.execCommand("copy");

// Limpiar selección
window.getSelection().removeAllRanges();

// Mensaje de éxito
alert("✔ Firma copiada correctamente. Pégala en Gmail.");
});
