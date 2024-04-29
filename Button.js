//<!-- Script para cambiar el contenido del div -->
  // Obtener los elementos de los botones y el div contenedor de texto
  const mainButton = document.getElementById('mainButton');
  const individualButton = document.getElementById('individualButton');
  const textContainer = document.getElementById('textContainer');

  // Agregar eventos de clic a los botones
  mainButton.addEventListener('click', () => {
    // Cambiar el contenido del div cuando se hace clic en el botón Main
    textContainer.textContent = 'import {Button, ButtonGroup} from "@nextui-org/react";';
  });

  individualButton.addEventListener('click', () => {
    // Cambiar el contenido del div cuando se hace clic en el botón Individual
    textContainer.textContent = 'import {Button, ButtonGroup} from "@nextui-org/button";';
  });

  function copyToClipboard() {
    const textToCopy = document.getElementById('textContainer').innerText;
    navigator.clipboard.writeText(textToCopy).then(() => {
      console.log('Texto copiado al portapapeles');
      showPopup();
    }).catch((error) => {
      console.error('Error al copiar el texto:', error);
    });
  }
  
  function copyToClipboard2() {
    const textToCopy = document.getElementById('codigo').innerText;
    navigator.clipboard.writeText(textToCopy).then(() => {
      console.log('Texto copiado al portapapeles');
      showPopup();
    }).catch((error) => {
      console.error('Error al copiar el texto:', error);
    });
  }

  function showPopup() {
    const popup = document.getElementById('popup');
    popup.classList.remove('hidden');
    setTimeout(() => {
      popup.classList.add('hidden');
    }, 3000); // Oculta el popup después de 4 segundos
  }

//<!-- Script para mostrar/ocultar el div transparente y los botones -->
  function mostrarPreview() {
    document.getElementById("previewDiv").classList.remove("hidden");
    document.getElementById("codeDiv").classList.add("hidden");
  }

  function mostrarCode() {
    document.getElementById("previewDiv").classList.add("hidden");
    document.getElementById("codeDiv").classList.remove("hidden");
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

  document.getElementById('waveButton').addEventListener('click', function(e) {
    const rect = e.target.getBoundingClientRect();
    const waveSize = Math.max(rect.width, rect.height) * 2;
    const waveOrigin = `${e.clientX - rect.left - waveSize / 2}px ${e.clientY - rect.top - waveSize / 2}px`;
    const wave = document.createElement('span');
    wave.style.width = wave.style.height = `${waveSize}px`;
    wave.style.left = waveOrigin.split(' ')[0];
    wave.style.top = waveOrigin.split(' ')[1];
    wave.classList.add('wave-effect');
  
    this.appendChild(wave);
  
    setTimeout(() => {
      wave.remove();
    }, 600); // Asume que la animación dura 600ms
  });
  
  
  