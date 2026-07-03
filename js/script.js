const nombre = document.getElementById("nombre");
const cargo = document.getElementById("cargo");
const telefono = document.getElementById("telefono");
const correo = document.getElementById("correo");

function formatoTelefono(num) {
    if (!num) return "+51 999 999 999";
    return "+51 " + num;
}

// Vista previa en pantalla
nombre.addEventListener("input", () => {
document.getElementById("prevNombre").innerText = nombre.value || "Nombre Apellido";
});

cargo.addEventListener("input", () => {
document.getElementById("prevCargo").innerText = cargo.value || "Cargo";
});

telefono.addEventListener("input", () => {
document.getElementById("prevTelefono").innerText = "📞 " + formatoTelefono(telefono.value);
});

correo.addEventListener("input", () => {
document.getElementById("prevCorreo").innerText = "✉ " + (correo.value || "correo@empresa.com");
});

// ⭐ FIRMA PROFESIONAL PARA GMAIL
document.getElementById("copiarBtn").addEventListener("click", () => {

const firmaHTML = `
<table cellpadding="0" cellspacing="0" style="font-family:Arial; font-size:14px; color:#333;">
<tr>

<td style="padding-right:15px; border-right:1px solid #1f6b3a;">
<img src="https://patrickcm23.github.io/Firma-F-G/img/logo.png" width="120">
</td>

<td style="padding-left:15px;">

<strong style="font-size:16px; color:#1f6b3a;">
${nombre.value || "Nombre Apellido"}
</strong>
<br>

<span>${cargo.value || "Cargo"}</span>
<br><br>

<span>📞 ${formatoTelefono(telefono.value)}</span><br>
<span>✉ ${correo.value || "correo@empresa.com"}</span><br>
<span>🌐 https://www.fyg-ingenieros.com</span>

<br><br>

<img src="https://patrickcm23.github.io/Firma-F-G/img/certificacion.png" width="180">

<br><br>

<a href="https://www.facebook.com/fygingenierosasociados/">Facebook</a> |
<a href="https://www.instagram.com/fygingenierosasociados/">Instagram</a> |
<a href="https://www.linkedin.com/company/fygingenierosasociados/">LinkedIn</a>

</td>

</tr>
</table>
`;

navigator.clipboard.writeText(firmaHTML).then(() => {
alert("Firma lista para Gmail ✔");
});

});
