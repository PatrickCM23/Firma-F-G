const nombre = document.getElementById("nombre");
const cargo = document.getElementById("cargo");
const telefono = document.getElementById("telefono");
const correo = document.getElementById("correo");

// =========================
// 🔄 VISTA PREVIA LIVE
// =========================
nombre.addEventListener("input", () => {
document.getElementById("prevNombre").innerText = nombre.value || "Nombre Apellido";
});

cargo.addEventListener("input", () => {
document.getElementById("prevCargo").innerText = cargo.value || "Cargo";
});

telefono.addEventListener("input", () => {
document.getElementById("prevTelefono").innerText = "📞 +51 " + (telefono.value || "000 000 000");
});

correo.addEventListener("input", () => {
document.getElementById("prevCorreo").innerText = "✉ " + (correo.value || "correo@empresa.com");
});

// =========================
// 🏢 FIRMA MULTINACIONAL FINAL
// =========================
document.getElementById("copiarBtn").addEventListener("click", async () => {

const firmaHTML = `
<table cellpadding="0" cellspacing="0" style="font-family:Arial, Helvetica, sans-serif; font-size:13px; color:#333; line-height:1.4;">

<tr>

<!-- LOGO -->
<td style="vertical-align:top; padding-right:18px; border-right:2px solid #1f6b3a;">
    <img src="https://patrickcm23.github.io/Firma-F-G/img/logo.png" width="120" style="display:block;">
</td>

<!-- INFORMACIÓN -->
<td style="vertical-align:top; padding-left:18px;">

<!-- NOMBRE -->
<div style="font-size:15px; font-weight:700; color:#1f6b3a;">
${nombre.value || "Nombre Apellido"}
</div>

<!-- CARGO -->
<div style="font-size:13px; color:#555; margin-top:2px;">
${cargo.value || "Cargo"}
</div>

<div style="height:10px;"></div>

<!-- CONTACTO -->
<div style="font-size:13px;">
📞 <span style="color:#333;">+51 ${telefono.value || "000 000 000"}</span>
</div>

<div style="font-size:13px;">
✉ <span style="color:#333;">${correo.value || "correo@empresa.com"}</span>
</div>

<div style="font-size:13px;">
🌐 <a href="https://www.fyg-ingenieros.com/" style="color:#1f6b3a; text-decoration:none;">
www.fyg-ingenieros.com
</a>
</div>

<div style="height:12px;"></div>

<!-- CERTIFICACIÓN -->
<img src="https://patrickcm23.github.io/Firma-F-G/img/certificacion.png"
width="170"
style="display:block; margin-top:5px;">

<div style="height:10px;"></div>

<!-- REDES -->
<div style="font-size:12px; color:#666;">
<a href="https://www.facebook.com/fygingenierosasociados/" style="color:#1f6b3a; text-decoration:none;">Facebook</a>
&nbsp;|&nbsp;
<a href="https://www.instagram.com/fygingenierosasociados/" style="color:#1f6b3a; text-decoration:none;">Instagram</a>
&nbsp;|&nbsp;
<a href="https://www.linkedin.com/company/fygingenierosasociados/" style="color:#1f6b3a; text-decoration:none;">LinkedIn</a>
</div>

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

    alert("✔ Firma multinacional copiada correctamente");

} catch (err) {

    // fallback ultra compatible
    const temp = document.createElement("textarea");
    temp.value = firmaHTML;
    document.body.appendChild(temp);
    temp.select();
    document.execCommand("copy");
    document.body.removeChild(temp);

    alert("✔ Firma copiada en modo compatible");
}

});
