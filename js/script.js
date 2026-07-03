const nombre = document.getElementById("nombre");
const cargo = document.getElementById("cargo");
const telefono = document.getElementById("telefono");
const correo = document.getElementById("correo");

nombre.addEventListener("input", () => {
document.getElementById("prevNombre").innerText = nombre.value || "Nombre Apellido";
});

cargo.addEventListener("input", () => {
document.getElementById("prevCargo").innerText = cargo.value || "Cargo";
});

telefono.addEventListener("input", () => {
document.getElementById("prevTelefono").innerText = "📞 " + (telefono.value || "+51 --- --- ---");
});

correo.addEventListener("input", () => {
document.getElementById("prevCorreo").innerText = "✉ " + (correo.value || "correo@empresa.com");
});

document.getElementById("copiarBtn").addEventListener("click", () => {
const firma = document.getElementById("firmaPreview").innerHTML;

navigator.clipboard.writeText(firma).then(() => {
alert("Firma copiada correctamente");
});
});
