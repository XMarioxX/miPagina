

const copyToClipboard = () => {
    const textToCopy = document.getElementById('textContainer').innerText;
    navigator.clipboard.writeText(textToCopy).then(() => {
      console.log('Texto copiado al portapapeles');
      showPopup();
    }).catch((error) => {
      console.error('Error al copiar el texto:', error);
    });
}

//<!-- Script para mostrar/ocultar el div transparente y los botones -->
function mostrarPreview() {
    document.getElementById("previewDivBlurred").classList.remove("hidden");
    document.getElementById("codeDivBlurred").classList.add("hidden");
}

function mostrarCode() {
document.getElementById("previewDivBlurred").classList.add("hidden");
document.getElementById("codeDivBlurred").classList.remove("hidden");
}

function mostrarMas() {
document.getElementById("3Botones").classList.remove("hidden");
document.getElementById("divTrans").classList.add("hidden");
document.getElementById("mostrarMenosBotton").classList.remove("hidden");
}

function mostrarMenos() {
document.getElementById("3Botones").classList.add("hidden");
document.getElementById("divTrans").classList.remove("hidden");
document.getElementById("mostrarMenosBotton").classList.add("hidden");
}