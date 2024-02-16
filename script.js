const $input = document.querySelector("#input");
const $btnCopiar = document.querySelector("#btnCopiar");
const $salida = document.querySelector("#salida");
const obtenerSalida = () => {
    const dominios = $input.value.split("\n");
    let salida = "";
    for (const dominio of dominios) {

        ["http://", "https://", "http://www.", "https://www."].forEach(prefijo => salida += prefijo + dominio + "\n");
    }
    return salida.trimEnd();
}
$input.addEventListener("keyup", () => {
    $salida.textContent = obtenerSalida();
});
$btnCopiar.addEventListener("click", async () => {
    const original = $btnCopiar.textContent;
    await navigator.clipboard.writeText(obtenerSalida());
    $btnCopiar.textContent = "Copiado";
    setTimeout(() => $btnCopiar.textContent = original, 500);
});