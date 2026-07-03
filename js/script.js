const nombre = document.getElementById("nombre");
const cargo = document.getElementById("cargo");
const telefono = document.getElementById("telefono");
const correo = document.getElementById("correo");

// ==============================
// 🔄 VISTA PREVIA
// ==============================
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

// ==============================
// 🏢 FIRMA PRO FINAL (GMAIL + OUTLOOK)
// ==============================
document.getElementById("copiarBtn").addEventListener("click", async () => {

const firmaHTML = `
<table cellpadding="0" cellspacing="0" style="font-family:Arial, sans-serif; font-size:13px; color:#333;">
<tr>

<!-- LOGO -->
<td style="padding-right:15px; vertical-align:top;">
<img src="https://patrickcm23.github.io/Firma-F-G/img/logo.png" width="120" style="display:block;">
</td>

<!-- DATOS -->
<td style="padding-left:15px; vertical-align:top;">

<!-- NOMBRE -->
<span style="font-size:15px; font-weight:bold; color:#1f6b3a;">
${nombre.value || "Nombre Apellido"}
</span>
<br>

<!-- CARGO -->
<span style="font-size:13px; color:#555;">
${cargo.value || "Cargo"}
</span>

<br><br>

<!-- CONTACTO -->
<span>📞 +51 ${telefono.value || "--- --- ---"}</span><br>
<span>✉ ${correo.value || "correo@empresa.com"}</span><br>
<span>🌐 https://www.fyg-ingenieros.com</span>

<br><br>

<!-- CERTIFICACIÓN -->
<img src="https://patrickcm23.github.io/Firma-F-G/img/certificacion.png" width="180" style="display:block;">

<br>

<!-- REDES -->
<span style="font-size:12px;">
<a href="https://www.facebook.com/fygingenierosasociados/" style="color:#1f6b3a; text-decoration:none;">Facebook</a>
&nbsp;|&nbsp;
<a href="https://www.instagram.com/fygingenierosasociados/" style="color:#1f6b3a; text-decoration:none;">Instagram</a>
&nbsp;|&nbsp;
<a href="https://www.linkedin.com/company/fygingenierosasociados/" style="color:#1f6b3a; text-decoration:none;">LinkedIn</a>
</span>

</td>

</tr>
</table>
`;

try {
    await navigator.clipboard.write([
        new ClipboardItem({
            "text/html": new Blob([firmaHTML], { type: "text/html" })
        })
    ]);

    alert("✔ Firma PRO copiada correctamente. Pégala en Gmail.");
    
} catch (err) {

    // fallback (por si navegador no soporta clipboard HTML)
    const fallback = document.createElement("textarea");
    fallback.value = firmaHTML;
    document.body.appendChild(fallback);
    fallback.select();
    document.execCommand("copy");
    document.body.removeChild(fallback);

    alert("✔ Firma copiada (modo compatible). Pégala en Gmail.");
}

});
