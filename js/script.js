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
<td valign="top" style="padding-right:15px; border-right:2px solid #1f6b3a;">
    <img src="logo.png" style="width:180px; max-width:180px; display:block;">
</td>

<!-- CONTENIDO -->
<td valign="top" style="padding-left:15px; text-align:left;">

    <!-- NOMBRE -->
    <div style="font-size:15px; font-weight:bold; color:#1f6b3a; text-align:left;">
        ${nombre.value || "Nombre Apellido"}
    </div>

    <!-- CARGO -->
    <div style="font-size:13px; color:#555; text-align:left; margin-top:2px;">
        ${cargo.value || "Cargo"}
    </div>

    <div style="height:10px;"></div>

    <!-- CONTACTO -->
    <div style="text-align:left;">
        📞 +51 ${telefono.value || "000 000 000"}<br>
        ✉  ${correo.value || "correo@empresa.com"}<br>
        🌐 https://www.fyg-ingenieros.com/
    </div>

    <div style="height:12px;"></div>

    <!-- CERTIFICACIÓN -->
    <img src="https://patrickcm23.github.io/Firma-F-G/img/certificacion.png"
    width="170"
    style="display:block;">

    <div style="height:10px;"></div>

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

    alert("✔ Firma copiada correctamente");

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
