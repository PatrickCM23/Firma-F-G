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
document.getElementById("copiarBtn").addEventListener("click", async () => {

const firma = document.getElementById("firmaPreview").outerHTML;

// Crear un Blob HTML (esto es CLAVE)
const blob = new Blob([firma], { type: "text/html" });
const data = [new ClipboardItem({ "text/html": blob })];

try {
    await navigator.clipboard.write(data);
    alert("✔ Firma copiada correctamente. Pégala en Gmail.");
} catch (err) {
    alert("❌ Tu navegador no soporta copia avanzada. Usa Chrome.");
}

});
